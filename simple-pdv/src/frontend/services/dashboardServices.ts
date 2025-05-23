const BASE_URL = import.meta.env.VITE_API_URL

export async function buscarTotaisDashboard(){
    const resposta = await fetch(`${BASE_URL}/dashboard/totais`);
    console.log(resposta)
    if(!resposta.ok){
        throw new Error("Erro ao buscar dados no dashboard")
    }
    return await resposta.json()
}
