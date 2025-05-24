import type { Venda } from "../interfaces/Venda";

const BASE_URL = "https://backend-simple-pdv.vercel.app/vendas"

export async function buscarVendas(): Promise<Venda[]> {
  const resposta = await fetch(BASE_URL);
  if (!resposta.ok) throw new Error("Erro ao buscar vendas!");

  const dados = await resposta.json();

  return dados.map((venda: Venda) => ({
    ...venda,
    id: venda._id,
  }));
}

export async function verEnderecoAPI(id: string){
  return alert("Chegou na api")
}

export async function excluirVenda(id: string){
    const resposta = await fetch(`${BASE_URL}/${id}`,
        {
            method: "DELETE"
        }
    );
    if(!resposta) throw new Error("Erro ao buscar vendas!")
    return true;
}

export async function atualizarEntrega(_id: string, entregue: boolean) {
  const resposta = await fetch(`${BASE_URL}/${_id}/entregue`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ entregue }),
  });

  console.log(resposta);

  if (!resposta.ok) {
    const erro = await resposta.text();
    throw new Error(erro);
  }

  try {
    console.log("Tentando converter resposta para JSON");
    const json = await resposta.json();
    console.log("Resposta convertida:", json);
    return json;
  } catch (erro) {
    console.warn("Resposta vazia, retornando valor padrão, erro: ", erro);
    return { entregue }; // ou {} se preferir
  }
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
