import { Avatar, Badge, Box, Card, Flex, Text } from "@radix-ui/themes"
import type { Produto } from "../../interfaces/Produto"
const BASE_URL = import.meta.env.VITE_API_URL

interface CardProdutoPros {
    produto: Produto
    onAdicionar: ()=> void
}


export function CardProduto({produto, onAdicionar}: CardProdutoPros){
    function handleSubmit(){
        onAdicionar();
    }
    
    return(
            <Box maxWidth={"17rem"} m={"3"}>
                <Card size={"1"} style={{backgroundColor: "#64d08f"}} onClick={handleSubmit}>
                    <Flex gap={"3"}>
                        <Avatar size={"5"} src={`${BASE_URL}/${produto.imagemUrl}`} radius="small" fallback="?"/>
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