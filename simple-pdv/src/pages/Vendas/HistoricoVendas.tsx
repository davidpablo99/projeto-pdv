import { Box, Flex, Text } from "@radix-ui/themes";

export default function HistoricoVendas(){
    return(
        <Flex direction={"row"} >
              <Box className="layout-container-direito" style={{backgroundColor: "#ffffff"}}>
                <Box >

                {/* AQUI DENTRO FICARA A TABELA COM AS VENDAS */}
                <Text>Historico venda</Text>
                </Box>
              </Box>
            </Flex>
    )
}