import type { Produto } from "../interfaces/Produto";
const BASE_URL = "https://backend-simple-pdv.vercel.app/produtos";

export async function buscarProdutos(): Promise<Produto[]> {
  const resposta = await fetch(BASE_URL);
  if (!resposta.ok) throw new Error("Erro ao buscar produtos");

  const dados = await resposta.json();

  return dados
  .filter((produto: Produto) => produto._id)
  .map((produto: Produto) => ({
    _id: produto._id,
    imagemUrl: produto.imagemUrl,
    nome: produto.nome,
    preco: produto.preco,
    descricao: produto.descricao,
    quantidade: produto.quantidade,
    categoria: produto.categoria,
    status: produto.status,
  }));
}

export async function registrarProduto(novoProduto: Produto) {
  const resposta = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(novoProduto),
  });

  if (!resposta.ok) throw new Error("Erro ao cadastrar produto!");

  return await resposta.json();
}

export async function excluirProduto(_id: string) {
  const resposta = await fetch(`${BASE_URL}/${_id}`, {
    method: "DELETE",
  });

  if (!resposta.ok) throw new Error("Erro ao excluir produto");
}
