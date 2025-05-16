import { Box, Tabs } from "@radix-ui/themes";
import Manutencao from "../Manutencao";

export default function Produtos() {
  return (
    <Tabs.Root defaultValue="cadastro-produto">
      <Tabs.List size={"2"}>
        <Tabs.Trigger value="cadastro-produto">Cadastro de Produtos</Tabs.Trigger>
        <Tabs.Trigger value="listar-produtos">Listar/Editar Produtos</Tabs.Trigger>
      </Tabs.List>

      <Box>
        <Tabs.Content value="cadastro-produto">
          <Manutencao/>
        </Tabs.Content>
      </Box>
    </Tabs.Root>
  );
}
