import { Box, Flex, Select, Tabs, Text, TextField } from "@radix-ui/themes";

export default function Produtos() {
  

  return (
    <Tabs.Root defaultValue="cadastro-produto">
      <Tabs.List size={"2"}>
        <Tabs.Trigger value="cadastro-produto">Cadastro de Produtos</Tabs.Trigger>
        <Tabs.Trigger value="listar-produtos">Listar/Editar Produtos</Tabs.Trigger>
      </Tabs.List>

      <Box>
        <Tabs.Content value="cadastro-produto">
          <br />
          <Flex gap={"3"}>
            <Box>
              <Text as="label">Nome do produto:</Text>
              <TextField.Root/>
            </Box>
            <Box>
              <Text as="label">Preço:</Text>
              <TextField.Root/>
            </Box>
            <Box>
              <Text as="label">Descrição:</Text>
              <TextField.Root/>
            </Box>
            <Box>
              <Text as="label">Quantidade:</Text>
              <TextField.Root/>
            </Box>
          </Flex>
          <Flex my={"4"}>
            <Box>
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
        </Tabs.Content>
      </Box>
    </Tabs.Root>
  );
}
