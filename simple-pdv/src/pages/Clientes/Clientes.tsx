import { Box, Tabs } from "@radix-ui/themes";
import Manutencao from "../Manutencao";

export default function Clientes() {
  return (
    <Tabs.Root defaultValue="cadastro-clientes">
      <Tabs.List size={"2"}>
        <Tabs.Trigger value="cadastro-clientes">Cadastro de Clientes</Tabs.Trigger>
        <Tabs.Trigger value="listar-clientes">Listar Clientes</Tabs.Trigger>
      </Tabs.List>

      <Box>
        <Tabs.Content value="cadastro-clientes">
          <Manutencao/>
        </Tabs.Content>
      </Box>
    </Tabs.Root>
  );
}
