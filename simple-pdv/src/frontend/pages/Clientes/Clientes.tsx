import { Box, Tabs } from "@radix-ui/themes";
import CadastroClientes from "./CadastroClientes";
import ListaClientes from "./ListaClientes";

export default function Clientes() {
  return (
    <Tabs.Root defaultValue="cadastro-clientes">
      <Tabs.List size={"2"}>
        <Tabs.Trigger value="cadastro-clientes">Cadastro de Clientes</Tabs.Trigger>
        <Tabs.Trigger value="lista-clientes">Listar Clientes</Tabs.Trigger>
      </Tabs.List>
    
      <Box>
        <Tabs.Content value="cadastro-clientes">
          <CadastroClientes/>
        </Tabs.Content>
        <Tabs.Content value="lista-clientes">
          <ListaClientes/>
        </Tabs.Content>
      </Box>
    </Tabs.Root>
  );
}
