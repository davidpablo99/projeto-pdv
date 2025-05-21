import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Box, Button, Checkbox, Flex, ScrollArea, Table, Text, TextField } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import type { Venda } from "../../interfaces/Venda";

export default function HistoricoVendas(){
    const [vendas, setVendas] = useState<Venda[]>([])
    const [idFiltro, setIdFiltro] = useState("")
    const [dataFiltro, setDataFiltro] = useState("")
    const dbVenda = "https://db-simple-pdv-david.vercel.app/vendas"

    async function excluirVenda(id: number){
      const confirmar = window.confirm("Tem certeza que deseja excluir esta venda?");
      if (!confirmar) return;

      try {
        const resposta = await fetch(`${dbVenda}/${id}`,{
          method: "DELETE",
        });

        if (resposta.ok) {
          setVendas((prev)=> prev.filter((venda)=> Number(venda.id) !== Number(id)));
        } else {
          alert("Erro ao excluir a venda")
        }
      } catch (erro) {
        console.log("Erro ao excluir a venda", erro)
      }
    }

    async function atualizarEntrega(id: number, entregue:boolean){
      try{
        const resposta = await fetch(`${dbVenda}/${id}`,{
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({entregue}),
        })
        if(resposta.ok){
          setVendas((prev)=>
            prev.map((venda)=>
              venda.id===id ? {...venda, entregue} : venda
            )
          );
        } else {
          alert("Erro ao atualizar entrega");
        };
      } catch (erro){
        console.log("Erro ao atualizar entrega", erro)
      }
    }

    async function filtrarVendas(){
      const resposta = await fetch(`${dbVenda}`);
      const dados = await resposta.json()
      
      if(!idFiltro && !dataFiltro){
        setVendas(dados);
        return
      }

      let vendasFiltradas = [...dados]
      
      if(idFiltro){
        vendasFiltradas = vendasFiltradas.filter(venda => venda.id === Number(idFiltro))
      }
      if(dataFiltro){
        vendasFiltradas = vendasFiltradas.filter((venda) => {
          const [dia,mes,anoHora] = venda.data.split("/");
          const [ano] = anoHora.split(" às ");
          const dataFormatada = `${ano}-${mes}-${dia}`;
          return dataFormatada === dataFiltro;
      })
      setVendas(vendasFiltradas)
      console.log(dataFiltro)
      console.log(vendasFiltradas)
    }}

  useEffect(()=>{
    async function carregarVendas(){
      try{
        const resposta = await fetch(`${dbVenda}`)
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
                          <Table.Row key={venda.id}>
                              <Table.RowHeaderCell>{venda.id}</Table.RowHeaderCell>
                              <Table.Cell maxWidth={"32vh"}>{venda.produtos.join(", ")}</Table.Cell>
                              <Table.Cell>R$ {venda.total}</Table.Cell>
                              <Table.Cell>
                                <Checkbox mx={"3"} checked={venda.entregue} onCheckedChange = {(checked) => atualizarEntrega(venda.id, checked === true)}
                                />
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
                                <Button color="tomato" onClick={()=> excluirVenda(Number(venda.id))}>Excluir</Button>
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