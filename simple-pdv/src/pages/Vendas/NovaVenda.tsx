import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Box, Button, Checkbox, Flex, RadioGroup, ScrollArea, Text, TextField } from "@radix-ui/themes";
import { CardProduto } from "../Produtos/CardProduto";
import type { Produto } from "../../interfaces/Produto";

const produto: Produto = {id:1, nome: "Feijoada Pequena", imagem:"https://i.panelinha.com.br/i1/bk-9097-39-panelinha-12-02-200635.webp",preco: 35, descricao: "Teste", quantidade: 12, status: "Em estoque"}

function fecharVenda(){
  alert("Fechando venda")
}

export default function NovaVenda(){
    return (
        <Flex direction={"row"} align={"center"} justify={"center"}>
              {/* SECTION DE CARRINHO E VENDA */}
              <Box className="layout-container-direito" mx={"1vw"} style={{backgroundColor: "#ffffff"}}>
                
                <Flex direction={"column"} style={{backgroundColor: "#f4f4f4", height: "45%",width: "100%", marginTop: "1vw", marginBottom: "1vw", padding: "1vw", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"}}>
                  <Flex style={{marginBottom: "1vw"}}>
                    <h2>Carrinho</h2>
                  </Flex>
                    <ScrollArea>
                      <CardProduto produto={produto}/>
                      <CardProduto produto={produto}/>
                      <CardProduto produto={produto}/>
                      <CardProduto produto={produto}/>
                      <CardProduto produto={produto}/>
                      <CardProduto produto={produto}/>
                    </ScrollArea>
                </Flex>
                <Flex style={{backgroundColor: "#f4f4f4", height: "35%",width: "100%", marginTop: "2vw", marginBottom: "1vw", padding: "1vw", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"}} align={"center"}>
                  <Box>
                    <h2>Checkout</h2>
                    <Flex direction={"column"} >
                      <Text as="label">Método de pagamento:</Text>
                      <RadioGroup.Root>
                        <RadioGroup.Item value="1">Dinheiro</RadioGroup.Item>
                        <RadioGroup.Item value="2">Débito</RadioGroup.Item>
                        <RadioGroup.Item value="3">Crédito</RadioGroup.Item>
                        <RadioGroup.Item value="4">Pix</RadioGroup.Item>
                      </RadioGroup.Root>
                    </Flex>
                  </Box>
                  <Box mx={"4"}>

                    <Flex gap={"4"} align={"center"}>
                      <Text as="label">Aplicar desconto?</Text>
                      <Checkbox />
                    </Flex>
                    <Flex gap={"4"} align={"center"}>
                      <Text as="label">Entregar?</Text>
                      <Checkbox />
                    </Flex>
                    <Flex gap={"4"}>
                      <Text>Total:</Text>
                    </Flex>

                  </Box>
                </Flex>
                    <Flex justify={"center"} gap={"4"} my={"5"}>
                      <Button onClick={fecharVenda}>Fechar venda</Button>
                    </Flex>
              </Box>

              {/* DAQUI PRA BAIXO É A SECTION DE PRODUTOS */}
              <Box className="layout-container-direito" style={{backgroundColor: "#ffffff", margin: "1em", padding:"1em"}} width={"35vw"} height={"45vw"}>
                  <TextField.Root placeholder="Pesquisar produto...">
                    <TextField.Slot>
                      <MagnifyingGlassIcon/>
                    </TextField.Slot>
                  </TextField.Root>
                  <br />
                  <Text style={{fontWeight:"bold"}}>Produtos:</Text>
                <ScrollArea my={"3"} style={{height: "35vw"}}>
                  <CardProduto produto={produto}/>
                  <CardProduto produto={produto}/>
                  <CardProduto produto={produto}/>
                  <CardProduto produto={produto}/>
                  <CardProduto produto={produto}/>
                  <CardProduto produto={produto}/>
                  <CardProduto produto={produto}/>
                  <CardProduto produto={produto}/>
                  <CardProduto produto={produto}/>
                  <CardProduto produto={produto}/>
                </ScrollArea>
              </Box>
            </Flex>
    )
}