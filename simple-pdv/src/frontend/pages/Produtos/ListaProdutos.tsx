import { Badge, Button, Flex, ScrollArea, Table, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import type { Produto } from "../../interfaces/Produto";
import { buscarProdutos, excluirProduto } from "../../services/produtoServices";
import Notificacao from "../../components/Notificacao/Notificacao";



function handleAtualizar(produto: Produto) {
  // aqui abre um modal ou redireciona pra edição
  alert(`Atualizar produto: ${produto.nome}`);
}

export default function ListaProdutos(){
    const [notificacao, setNotificacao] = useState<string | null>(null)
    const [produtos,setProdutos] = useState<Produto[]>([])
    
    async function mostrarNotificacao(mensagem: string){
        setNotificacao(mensagem);
        setTimeout(()=> setNotificacao(null), 3000)
    }

    useEffect(() => {
        buscarProdutos()
            .then(setProdutos)
            .catch((err) => console.log("Erro ao buscar produtos", err));
        }, []);
    
        function handleExcluir(_id: string) {
            if (confirm("Tem certeza que deseja excluir este produto?")) {
                console.log("Id recebido para excluir: ", _id)
                excluirProduto(_id)
                .then(() => {
                    setProdutos((prev) => prev.filter((p) => p._id !== _id));
                    mostrarNotificacao("Produto excluído com sucesso!");
                })
                .catch((err) => {
                    console.error(err);
                    mostrarNotificacao("Erro ao excluir o produto.");
                });
            }
        }


    return(
        <>
        {
            notificacao && (
            <Notificacao mensagem={notificacao}/>
            )
        }
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
                        {produtos.map((produto) =>(
                            <Table.Row key={produto._id}>
                                <Table.Cell>
                                    {produto.imagemUrl ? (
                                    <img
                                        src={`${produto.imagemUrl}`}
                                        alt="Produto"
                                        width="50"
                                    />
                                    ) : (
                                    <Text size="1" color="gray">Sem imagem</Text>
                                    )}
                                </Table.Cell>
                                <Table.RowHeaderCell>{produto.nome}</Table.RowHeaderCell>
                                <Table.Cell maxWidth={"30vw"} minWidth={"30vw"}>{produto.descricao}</Table.Cell>
                                <Table.Cell>{produto.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</Table.Cell>
                                <Table.Cell>{produto.quantidade}</Table.Cell>
                                <Table.Cell>
                                    <Badge color={produto.status === "em-estoque" ? "green" : "tomato"}>
                                        {produto.status}
                                    </Badge>
                                </Table.Cell>
                                <Table.Cell>
                                    <Flex>
                                        <Button size="1" color="cyan" mx="3" onClick={() => handleAtualizar(produto)}>Atualizar</Button>
                                        <Button size="1" color="tomato" onClick={() => handleExcluir(produto._id!)}>Excluir</Button>
                                    </Flex>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </ScrollArea>
            </Table.Root>
        </Flex>
        </>
    )
}