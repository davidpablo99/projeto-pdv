const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");
const path = require("path");
const fs = require("fs");
const multer = require("multer");

const uploadDir = path.join(__dirname, "..", "..", "uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // Gera um nome único para o arquivo com a extensão original
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, uniqueSuffix + ext);
  },
});

const upload = multer({ storage });

const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors());
app.use("/uploads", express.static(uploadDir));
app.use(express.json({ limit: '10mb' }));

const uri = "mongodb+srv://davidpablo99:suzana11@cluster0.bi4gqph.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

const dbName = "simple-pdv";
const collectionName = "vendas";
const collectionProdutos = "produtos";


app.get("/vendas", async (req, resp) => {
    try {
        await client.connect();
        const db = client.db(dbName);
        const vendas = await db.collection(collectionName).find().toArray();
        resp.json(vendas);
    } catch (err) {
        console.log(err);
        resp.status(500).send("Erro ao buscar vendas");
    }
});

app.post("/vendas", async (req, res) => {
    try {
        const novaVenda = req.body;
        await client.connect();
        const db = client.db(dbName);
        await db.collection(collectionName).insertOne(novaVenda);
        res.status(201).json({ message: "Produto cadastrado com sucesso!" });
    } catch (err) {
        console.log(err);
        res.status(500).send("Erro ao cadastrar venda");
    }
});

app.delete("/vendas/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await client.connect();
    const db = client.db(dbName);
    const resultado = await db.collection(collectionName).deleteOne({_id: new ObjectId(id)});
    if (resultado.deletedCount === 0) {
      return res.status(404).json({ erro: "Venda não cadastrada" });
    }
    res.send("Venda excluida com sucesso!");
  } catch (err) {
      console.log(err)
      res.status(500).send("Erro ao excluir venda");
    }
});

app.patch("/vendas/:id/entregue", async (req, res) => {
  try {
    const id = req.params.id;
    const { entregue } = req.body;

    await client.connect();
    const db = client.db(dbName);
    const resultado = await db.collection(collectionName).findOneAndUpdate(
      {_id: new ObjectId(id)},
      { $set: { entregue } },
      { returnDocument: "after" }
    );
    res.status(200).json({ entregue });
    if (resultado.matchedCount === 0){
      return res.status(404).json({ erro: "Venda não cadastrada" });
    }
    res.json(resultado.value);
  } catch (err) {
    console.log(err);
    res.status(500).json({ erro: "Erro ao atualizar status de entrega" });
  }
})

app.post("/produtos", upload.single("imagem"), async (req, res) => {
  try {
    const { nome, preco, descricao, quantidade, status } = req.body;
    const imagem = req.file; // arquivo enviado

    await client.connect();
    const db = client.db(dbName);

    // Exemplo simples: salvar os dados do produto + caminho da imagem
    const novoProduto = {
      nome,
      preco: Number(preco),
      descricao,
      quantidade: Number(quantidade),
      status,
      imagemPath: imagem.path, // caminho da imagem salva no servidor
    };

    await db.collection(collectionProdutos).insertOne(novoProduto);

    res.status(201).send("Produto cadastrado com sucesso!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao cadastrar produto");
  }
});

app.get("/produtos", async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const produtos = await db.collection(collectionProdutos).find().toArray();
    const produtosFormatados = produtos.map(p => ({
      id: p._id.toString(),
      imagemPath: p.imagemPath,
      nome: p.nome,
      preco: p.preco,
      descricao: p.descricao,
      quantidade: p.quantidade,
      categoria: p.categoria,
      status: p.status
    }));
    res.json(produtosFormatados);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar produtos");
  }
});

app.delete("/produtos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await client.connect();
    const db = client.db(dbName);

    const resultado = await db.collection(collectionProdutos).deleteOne({
      _id: new ObjectId(id)
    });

    if (resultado.deletedCount === 0) {
      return res.status(404).send("Produto não encontrado");
    }

    res.send("Produto excluído com sucesso");
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao excluir produto");
  }
});

app.get("/dashboard/totais", async (req, res) => {
  try {
    await client.connect()
    const db = client.db(dbName);

    const totalVendas = await db.collection(collectionName).countDocuments();

    const produtosCadastrados = await db.collection(collectionProdutos).countDocuments();

    const vendas = await db.collection(collectionName).find().toArray();
    const valorTotalVendido = vendas.reduce((soma, venda) => {
      return soma + (venda.total || 0);
    }, 0)
    res.json({
      totalVendas,
      produtosCadastrados,
      valorTotalVendido
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: "Erro ao buscar dados do dashboard" });
  }
});

module.exports.handler = serverless(app);