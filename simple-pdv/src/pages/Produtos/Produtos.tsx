import { Box, Tabs } from "@radix-ui/themes";
import CadastroProdutos from "./CadastroProdutos";
import ListaProdutos from "./ListaProdutos";

export default function Produtos() {
  

  return (
    <Tabs.Root defaultValue="cadastro-produto">
      <Tabs.List size={"2"}>
        <Tabs.Trigger value="cadastro-produto">Cadastro de Produtos</Tabs.Trigger>
        <Tabs.Trigger value="listar-produtos">Listar/Editar Produtos</Tabs.Trigger>
      </Tabs.List>

      <Box my={"4"} width = "80vw">
        <Tabs.Content value="cadastro-produto">
          <CadastroProdutos/>
        </Tabs.Content >
        <Tabs.Content value="listar-produtos">
          <ListaProdutos/>
        </Tabs.Content>
      </Box>
    </Tabs.Root>
  );
}
