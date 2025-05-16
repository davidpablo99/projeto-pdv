import { Box, Flex, Tabs, Text } from "@radix-ui/themes";

export default function Vendas() {
  return (
    <Tabs.Root defaultValue="nova-venda">
      <Tabs.List size={"2"}>
        <Tabs.Trigger value="nova-venda">Nova venda</Tabs.Trigger>
        <Tabs.Trigger value="historico-vendas">Histórico de vendas</Tabs.Trigger>
      </Tabs.List>
      
      <Flex direction={"row"} style={{backgroundColor: "#e1dfdf"}}>

        <Flex direction={"row"}>
          <Tabs.Content value="nova-venda" style={{width:"85vw"}}>
            <Flex direction={"row"}>
              <Box style={{backgroundColor: "#ffffff", margin: "1em"}} width={"70%"}>
                {/* AQUI DENTRO FICARA AS OPERAÇÕES DO CARRINHO */}
                <Text>Nova venda</Text>
              </Box>
              <Box style={{backgroundColor: "#ffffff", margin: "1em"}} width={"30%"} height={"85vh"}>
                {/* AQUI DENTRO FICARA OS PRODUTOS */}
                <Text>PRODUTOS:</Text>
              </Box>
            </Flex>
          </Tabs.Content>
        </Flex>

        <Flex direction={"row"} my={"4"}>
          <Tabs.Content value="historico-vendas" style={{width:"80vw"}}>
            <Flex direction={"row"} gap={"4"}>
              <Box style={{backgroundColor: "red"}} width={"100%"} height={"90vh"}>
                {/* AQUI DENTRO FICARA A TABELA COM AS VENDAS */}
                <Text>Nova venda</Text>
              </Box>
            </Flex>
          </Tabs.Content>
        </Flex>

      </Flex>

    </Tabs.Root>
  );
}
