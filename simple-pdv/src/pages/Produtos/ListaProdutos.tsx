import { Badge, Button, Flex, ScrollArea, Table, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import type { Produto } from "../../interfaces/Produto";

export default function ListaProdutos(){
    const [produtos,setProdutos] = useState<Produto[]>([])
    
        useEffect(()=>{
          fetch("http://localhost:3001/produtos")
          .then((resp)=> resp.json())
          .then((data)=> setProdutos(data))
          .catch((err)=> console.log("Erro ao buscar produtos",err))
        },[]);

    return(
        <Flex style={{backgroundColor:"white", boxShadow: "5px 5px 8px rgba(0, 0, 0, 0.3)",padding: "2vw", maxHeight: "80vh", overflow: "hidden"}}>
            <Table.Root variant="surface" style={{height: "100%",width:"100%"}}>

                <ScrollArea type="always" style={{ height: "60vh" }}>
                <Table.Header>
                    <Table.Row>
                        <Table.RowHeaderCell>Imagem</Table.RowHeaderCell>
                        <Table.RowHeaderCell>Nome do Produto</Table.RowHeaderCell>
                        <Table.RowHeaderCell>Descrição</Table.RowHeaderCell>
                        <Table.RowHeaderCell>Preço</Table.RowHeaderCell>
                        <Table.RowHeaderCell>Quantidade em estoque</Table.RowHeaderCell>
                        <Table.RowHeaderCell>Status</Table.RowHeaderCell>
                        <Table.RowHeaderCell>Opções</Table.RowHeaderCell>
                    </Table.Row>
                </Table.Header>

                    <Table.Body>
                        {produtos.map((produto, index) =>(
                            <Table.Row key={index}>
                                <Table.Cell>
                                    {produto.imagem ? (
                                        <img src={produto.imagem} alt="Produto" width="50" />
                                    ) : (
                                        <Text size="1" color="gray">Sem imagem</Text>
                                    )}
                                </Table.Cell>
                                <Table.RowHeaderCell>{produto.nome}</Table.RowHeaderCell>
                                <Table.Cell maxWidth={"30vw"} minWidth={"30vw"}>{produto.descricao}</Table.Cell>
                                <Table.Cell>{produto.preco}</Table.Cell>
                                <Table.Cell>{produto.quantidade}</Table.Cell>
                                <Table.Cell>
                                    <Badge color={produto.status === "em-estoque" ? "green" : "tomato"}>
                                        {produto.status}
                                    </Badge>
                                </Table.Cell>
                                <Table.Cell>
                                    <Flex>
                                        <Button size={"1"} color="cyan" mx={"3"}>Atualizar</Button>
                                        <Button size={"1"} color="tomato">Excluir</Button>
                                    </Flex>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </ScrollArea>
            </Table.Root>
        </Flex>
    )
}