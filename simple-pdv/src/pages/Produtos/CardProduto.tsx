import { Avatar, Badge, Box, Card, Flex, Text } from "@radix-ui/themes"
import type { Produto } from "../../interfaces/Produto"

interface CardProdutoPros {
    produto: Produto
}


export function CardProduto({produto}: CardProdutoPros){
    // Itens para testes abaixo
    // const produto: Produto = {id:1, nome: "Feijoada Pequena", imagem:"https://i.panelinha.com.br/i1/bk-9097-39-panelinha-12-02-200635.webp",preco: 35, descricao: "Teste", estoque: 12, status: "Em estoque"}
    // const produto2: Produto = {id:1, nome: "Feijoada Pequena", imagem:"https://i.panelinha.com.br/i1/bk-9097-39-panelinha-12-02-200635.webp",preco: 35, descricao: "Teste", estoque: 12, status: "Em estoque"}
    return(
            <Box maxWidth={"35rem"} m={"3"}>
                <Card size={"4"} style={{backgroundColor: "#64d08f"}}>
                    <Flex gap={"3"}>
                        <Avatar size={"6"} src={produto.imagem} radius="small" fallback="?"/>
                        <Box>
                            <Text as="div" size={"2"} weight={"bold"}>{produto.nome}</Text>
                            <Text as="p" size={"1"} color="gray">{produto.descricao}</Text>
                            <Text as="p" size={"1"} color="gray">{`R$ ${produto.preco}`}</Text>
                            <Text as="p" size={"1"} color="gray">
                                <Badge color="green">
                                {`${produto.status}`}
                                </Badge>
                                </Text>
                        </Box>
                    </Flex>
                </Card>
            </Box>
    )
}