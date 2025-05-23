import { Flex } from "@radix-ui/themes";
import CardDashboard from "../../components/Cards/CardDashbord";
import { useEffect, useState } from "react";
import { buscarTotaisDashboard } from "../../services/dashboardServices";

export default function Dashboard() {
  const [totais, setTotais] = useState({
    totalVendas: 0,
    produtosCadastrados: 0,
    valorTotalVendido: 0,
  });
  useEffect(()=> {
    async function carregarDados() {
      try {
        const dados = await buscarTotaisDashboard();
        setTotais(dados);
      } catch (err) {
        console.log("Erro ao carregar dashboard", err)
      }
    }
    carregarDados()
  }, []);

  return (
    <Flex className="layout-container-direito" align={"center"} justify={"center"}>
      <CardDashboard titulo="Total de vendas" valor={`${totais.totalVendas}`}/>
      <CardDashboard titulo="Produtos cadastrados" valor={`${totais.produtosCadastrados}`}/>
      <CardDashboard titulo="Valor total vendido" valor={`R$ ${totais.valorTotalVendido.toFixed(2)}`}/>
    </Flex>
  );
}
