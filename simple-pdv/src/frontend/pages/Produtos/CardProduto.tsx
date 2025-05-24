import { Avatar, Badge, Box, Card, Flex, Text } from "@radix-ui/themes"
import type { Produto } from "../../interfaces/Produto"

interface CardProdutoPros {
    produto: Produto
    onAdicionar: ()=> void
}


export function CardProduto({produto, onAdicionar}: CardProdutoPros){
    function handleSubmit(){
        onAdicionar();
    }
    console.log("Produto recebido:", produto);
    
    return(
            <Box maxWidth={"17rem"} m={"3"}>
                <Card size={"1"} style={{backgroundColor: "#64d08f"}} onClick={handleSubmit}>
                    <Flex gap={"3"}>
                        <img src={produto.imagemUrl} alt="Produto" width="100" height="100" />
                        <Box>
                            <Text as="div" size={"2"} weight={"bold"}>{produto.nome}</Text>
                            {/* <Text as="p" size={"1"} color="gray">{produto.descricao}</Text> */}
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