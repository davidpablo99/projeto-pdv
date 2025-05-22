import type { Venda } from "../interfaces/Venda";

const BASE_URL = "http://localhost:3001/vendas"

export async function buscarVendas(){
    const resposta = await fetch(BASE_URL);
    if(!resposta) throw new Error("Erro ao buscar vendas!")
    return await resposta.json();
}

export async function excluirVenda(id: number){
    const resposta = await fetch(`${BASE_URL}/${id}`,
        {
            method: "DELETE"
        }
    );
    if(!resposta) throw new Error("Erro ao buscar vendas!")
    return true;
}

export async function atualizarEntrega(id: number, entregue: boolean){
    const resposta = await fetch(`${BASE_URL}/${id}`,{
        method: "PATCH", 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({entregue}),
    });
    if(!resposta) throw new Error("Erro ao atualizar entrega");
    return await resposta.json()
}

export async function registrarVenda(novaVenda: Venda){
    const resposta = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(novaVenda)
    });
    if(!resposta.ok) throw new Error("Erro ao cadastrar venda!");
    return await resposta.json()
}
