import { Box, Flex, Select, Text, TextField } from "@radix-ui/themes";

export default function CadastroProdutos(){
    return (
        <>
        <Flex as="div" width = "80vw">
            <Box width={"100%"}>
              <Text as="label">Nome do produto:</Text>
              <TextField.Root/>
            </Box>
          </Flex>
          <Flex as="div" gap={"3"} my={"4"} width = "80vw">
            <Box>
              <Text as="label">Preço:</Text>
              <TextField.Root/>
            </Box>
            <Box>
              <Text as="label">Descrição:</Text>
              <TextField.Root placeholder="Opcional"/>
            </Box>
            <Box>
              <Text as="label">Quantidade em estoque:</Text>
              <TextField.Root/>
            </Box>
          <Flex as="div" gap={"3"} gridColumn={"4"}>
            <Box>
                <Box>
                <Text>Status:</Text>
                </Box>
                <Select.Root defaultValue="em-estoque">
                    <Select.Trigger/>
                    <Select.Content>
                        <Select.Group>
                        <Select.Item value="em-estoque">Em estoque</Select.Item>
                        <Select.Item value="esgotado">Esgotado</Select.Item>
                        </Select.Group>
                    </Select.Content>
                </Select.Root>
            </Box>
          </Flex>
          </Flex>
          <Flex>
            <Box>
              <Text as="label">Imagem do Produto:</Text><br />
              <input type="file"/>
            </Box>
          </Flex>
        </>
    )
}