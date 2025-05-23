const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");
const { MongoClient, ObjectId } = require("mongodb");
const multer = require("multer");
const { v2: cloudinary } = require("cloudinary");
const streamifier = require("streamifier");

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

// Configurar Cloudinary com suas credenciais (crie uma conta grátis e pegue esses dados)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const upload = multer();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

const dbName = "simple-pdv";
const collectionName = "vendas";
const collectionProdutos = "produtos";

// Função para upload de imagem para o Cloudinary via buffer (sem salvar localmente)
function uploadToCloudinary(buffer) {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: "simple-pdv" },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );
    streamifier.createReadStream(buffer).pipe(uploadStream);
  });
}

// Rotas

app.get("/vendas", async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const vendas = await db.collection(collectionName).find().toArray();
    res.json(vendas);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar vendas");
  }
});

app.post("/vendas", async (req, res) => {
  try {
    const novaVenda = req.body;
    await client.connect();
    const db = client.db(dbName);
    await db.collection(collectionName).insertOne(novaVenda);
    res.status(201).json({ message: "Venda cadastrada com sucesso!" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao cadastrar venda");
  }
});

app.delete("/vendas/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await client.connect();
    const db = client.db(dbName);
    const resultado = await db.collection(collectionName).deleteOne({ _id: new ObjectId(id) });
    if (resultado.deletedCount === 0) {
      return res.status(404).json({ erro: "Venda não cadastrada" });
    }
    res.send("Venda excluída com sucesso!");
  } catch (err) {
    console.error(err);
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
      { _id: new ObjectId(id) },
      { $set: { entregue } },
      { returnDocument: "after" }
    );

    if (!resultado.value) {
      return res.status(404).json({ erro: "Venda não cadastrada" });
    }

    res.status(200).json(resultado.value);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: "Erro ao atualizar status de entrega" });
  }
});

// Rota produtos com upload de imagem para Cloudinary

app.post("/produtos", upload.single("imagem"), async (req, res) => {
  try {
    const { nome, preco, descricao, quantidade, status, categoria } = req.body;
    const arquivo = req.file; // imagem recebida no multer

    let imagemUrl = "";

    if (arquivo) {
      const resultadoUpload = await uploadToCloudinary(arquivo.buffer);
      imagemUrl = resultadoUpload.secure_url; // pega URL da imagem
    }

    await client.connect();
    const db = client.db(dbName);

    const novoProduto = {
      nome,
      preco: Number(preco),
      descricao,
      quantidade: Number(quantidade),
      status,
      categoria,
      imagemUrl, // URL da imagem no Cloudinary
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

    const produtosFormatados = produtos.map((p) => ({
      id: p._id.toString(),
      imagemUrl: p.imagemUrl,
      nome: p.nome,
      preco: p.preco,
      descricao: p.descricao,
      quantidade: p.quantidade,
      categoria: p.categoria,
      status: p.status,
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
      _id: new ObjectId(id),
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
    await client.connect();
    const db = client.db(dbName);

    const totalVendas = await db.collection(collectionName).countDocuments();

    const produtosCadastrados = await db.collection(collectionProdutos).countDocuments();

    const vendas = await db.collection(collectionName).find().toArray();

    const valorTotalVendido = vendas.reduce((soma, venda) => {
      return soma + (venda.total || 0);
    }, 0);

    res.json({
      totalVendas,
      produtosCadastrados,
      valorTotalVendido,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: "Erro ao buscar dados do dashboard" });
  }
});

// exporta handler para Vercel serverless
module.exports.handler = serverless(app);
