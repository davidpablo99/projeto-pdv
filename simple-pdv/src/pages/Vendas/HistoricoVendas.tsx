import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Box, Button, Checkbox, Flex, ScrollArea, Table, Text, TextField } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import type { Venda } from "../../interfaces/Venda";

export default function HistoricoVendas(){
    const [vendas, setVendas] = useState<Venda[]>([])
    // const [vendaEditada, setVendaEditada] = useState<Venda | null>(null)
    // const [editando, setEditando] = useState(false);

    async function excluirVenda(id: string){
      const confirmar = window.confirm("Tem certeza que deseja excluir esta venda?");
      if (!confirmar) return;

      try {
        const resposta = await fetch(`http://localhost:3001/vendas/${id}`,{
          method: "DELETE",
        });

        if (resposta.ok) {
          setVendas((prev)=> prev.filter((venda)=> String(venda.id) !== String(id)));
        } else {
          alert("Erro ao excluir a venda")
        }
      } catch (erro) {
        console.log("Erro ao excluir a venda", erro)
      }
    }

    // async function editarVenda(){

    // }

    useEffect(()=>{
      async function carregarVendas(){
        try{
          const resposta = await fetch("http://localhost:3001/vendas")
          const dados = await resposta.json();
          setVendas(dados);
        } catch (erro){
          console.log("Erro ao carregar vendas", erro);
        }
      }
      carregarVendas();
    }, []);

    return(
        <Flex direction={"row"} >

          <Box className="layout-container-direito" >
              <Box style={{backgroundColor: "white",padding: "1vw", boxShadow: "5px 5px 8px rgba(0, 0, 0, 0.3)"}}>
                <Flex direction={"row"} gap={"4"} align={"center"}>
                  <Text as="label">ID</Text>
                  <TextField.Root></TextField.Root>
                  <Text as="label">Data</Text>
                  <TextField.Root type="date"></TextField.Root>
                  <Button>
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
                          <Table.Row key={venda.id}>
                              <Table.RowHeaderCell>{venda.id}</Table.RowHeaderCell>
                              <Table.Cell maxWidth={"32vh"}>{venda.produtos.join(", ")}</Table.Cell>
                              <Table.Cell>R$ {venda.total}</Table.Cell>
                              <Table.Cell>
                                <Checkbox mx={"3"} defaultChecked={!!venda.endereco}/>
                                </Table.Cell>
                              <Table.Cell>{venda.metodoPagamento}</Table.Cell>
                              <Table.Cell>{venda.data}</Table.Cell>
                              <Table.Cell>
                                <Button 
                                  mx={"3"} 
                                  color="cyan" 
                                  onClick={()=> {
                                    console.log(venda)
                                    // setVendaEditada(venda)
                                    // setEditando(true)
                                    alert("Esta função ainda não está disponivel")
                                    }}
                                  >
                                      Editar
                                </Button>
                                <Button color="tomato" onClick={()=> excluirVenda(String(venda.id))}>Excluir</Button>
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
    )
}