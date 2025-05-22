const BASE_URL = "http://localhost:3001/produtos"

export async function buscarProdutos(){
    const resposta = await fetch(BASE_URL);
    if (!resposta.ok) throw new Error("Erro ao buscar produtos");
    return await resposta.json();
}