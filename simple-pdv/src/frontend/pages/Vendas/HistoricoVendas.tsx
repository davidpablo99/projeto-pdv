import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Box, Button, Checkbox, Flex, ScrollArea, Table, Text, TextField } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import type { Venda } from "../../interfaces/Venda";
import { buscarVendas, excluirVenda as excluirVendaAPI, atualizarEntrega as atualizarEntregaAPI } from "../../services/vendasServices";
import Notificacao from "../../components/Notificacao/Notificacao";
import { MdDelete, MdEdit } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

export default function HistoricoVendas(){
    const [vendas, setVendas] = useState<Venda[]>([])
    const [idFiltro, setIdFiltro] = useState("")
    const [dataFiltro, setDataFiltro] = useState("")
    const [notificacao, setNotificacao] = useState<string | null>(null)

    async function mostrarNotificacao(mensagem: string){
      setNotificacao(mensagem);
      setTimeout(()=> setNotificacao(null), 3000)
    }

    async function verEndereco(endereco: string){
      if (endereco === null) {
        alert("Sem endereço cadastrado!")
      } else {
        alert(`Endereço: ${endereco}`)
      }
    }
    
    async function excluirVenda(id: string){
      const confirmar = window.confirm("Tem certeza que deseja excluir esta venda?");
      if (!confirmar) return;

      try {
        await excluirVendaAPI(id);
        setVendas((prev) => prev.filter((venda) => venda._id !== id));
      } catch (erro: unknown) {
        console.log("Erro ao excluir venda", erro);
        mostrarNotificacao("Erro ao excluir a venda");
      }
      mostrarNotificacao("Item excluido!")
    }

    async function atualizarEntrega(_id: string, entregue:boolean){
      console.log(_id, entregue)
      try {
        const vendaAtualizada = await atualizarEntregaAPI(_id, entregue);
        setVendas((vendasAntigas) =>
          vendasAntigas.map((venda) => 
            venda._id === _id ? {...venda, entregue: vendaAtualizada.entregue} : venda)
        )
        console.log("Resposta da API:", vendaAtualizada);
        mostrarNotificacao("Status de entrega atualizado!");
        } catch (erro){
        console.log("Erro ao atualizar entrega", erro);
        mostrarNotificacao("Erro ao atualizar entrega.");
      }
    }

    async function filtrarVendas() {
      const dados = await buscarVendas();

      if (!idFiltro && !dataFiltro) {
        setVendas(dados);
        return;
      }

      let vendasFiltradas = [...dados];

      if (idFiltro) {
        vendasFiltradas = vendasFiltradas.filter((venda) => venda._id === idFiltro);
      }

      if (dataFiltro) {
        vendasFiltradas = vendasFiltradas.filter((venda) => {
          const [dia, mes, anoHora] = venda.data.split("/");
          const [ano] = anoHora.split(" às ");
          const dataFormatada = `${ano}-${mes}-${dia}`;
          return dataFormatada === dataFiltro;
        });
      }

      setVendas(vendasFiltradas);

      console.log("Data filtro:", dataFiltro);
      console.log("Vendas filtradas:", vendasFiltradas);
    }

  // FUNÇÃO PARA CARREGAR VENDAS
  useEffect(()=>{
    async function carregarVendas(){
      try{
        const dados = await buscarVendas()
        console.log("Vendas carregadas (id tipo):", dados.map(v => typeof v._id));
        setVendas(dados);
      } catch (erro){
        console.log("Erro ao carregar vendas", erro);
      }
    }
    carregarVendas();
  }, []);

    return(
      <>
      {
        notificacao && (
          <Notificacao mensagem={notificacao}/>
        )
      }
        <Flex direction={"row"} >

          <Box className="layout-container-direito" >
              <Box style={{backgroundColor: "white",padding: "1vw", boxShadow: "5px 5px 8px rgba(0, 0, 0, 0.3)"}}>
                <Flex direction={"row"} gap={"4"} align={"center"}>
                  <Text as="label">ID</Text>
                  <TextField.Root 
                    value={idFiltro}
                    onChange={(e)=> setIdFiltro(e.target.value)}
                    placeholder="Filtrar por ID"
                  />
                  <Text as="label">Data</Text>
                  <TextField.Root 
                    type="date" 
                    value={dataFiltro}
                    onChange={(e)=> setDataFiltro(e.target.value)}
                  />
                  <Button onClick={filtrarVendas}>
                    <MagnifyingGlassIcon/>
                    Pesquisar
                  </Button>
                </Flex>

                <Flex my={"4"}>
                <ScrollArea  >
                <Table.Root variant="surface" style={{width:"77vw",height: "35vw"}}>

                    <Table.Header>
                        <Table.Row>
                            <Table.RowHeaderCell>ID</Table.RowHeaderCell>
                            <Table.RowHeaderCell>Produtos</Table.RowHeaderCell>
                            <Table.RowHeaderCell>Total</Table.RowHeaderCell>
                            <Table.RowHeaderCell>Entrega</Table.RowHeaderCell>
                            <Table.RowHeaderCell>Pagamento</Table.RowHeaderCell>
                            <Table.RowHeaderCell>Data</Table.RowHeaderCell>
                            <Table.RowHeaderCell>Opções</Table.RowHeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                      {
                        vendas.map(venda=>(
                          <Table.Row key={venda._id}>
                              <Table.RowHeaderCell>{venda._id}</Table.RowHeaderCell>
                              <Table.Cell maxWidth={"32vh"}>{venda.produtos.join(", ")}</Table.Cell>
                              <Table.Cell>R$ {venda.total}</Table.Cell>
                              <Table.Cell>
                                <Checkbox mx={"3"} checked={venda.entregue} onCheckedChange = {(checked) => atualizarEntrega(venda._id!, checked === true)}
                                />
                                </Table.Cell>
                              <Table.Cell>{venda.metodoPagamento}</Table.Cell>
                              <Table.Cell>{venda.data}</Table.Cell>
                              <Table.Cell>
                                <Button 
                                  m={"1"} 
                                  color="cyan" 
                                  onClick={()=> {
                                    console.log(venda)
                                    mostrarNotificacao("Esta função ainda não está disponivel")
                                    }}
                                  >
                                      <MdEdit />
                                </Button>
                                <Button m={"1"} color="green" onClick={() => verEndereco(venda.endereco!)}>
                                  <TbTruckDelivery />
                                </Button>
                                <Button m={"1"} color="tomato" onClick={() => excluirVenda(venda._id!)}>
                                  <MdDelete />
                                </Button>
                              </Table.Cell>
                          </Table.Row>
                        ))
                      }
                    </Table.Body>

                </Table.Root>
                </ScrollArea>
              </Flex>

            </Box>
          </Box>
        </Flex>
      </>
    )
}