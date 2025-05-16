import { Box, Tabs } from "@radix-ui/themes";
import Manutencao from "../Manutencao";

export default function Vendas() {
  return (
    <Tabs.Root defaultValue="nova-venda">
      <Tabs.List size={"2"}>
        <Tabs.Trigger value="nova-venda">Nova venda</Tabs.Trigger>
        <Tabs.Trigger value="historico-vendas">Histórico de vendas</Tabs.Trigger>
      </Tabs.List>

      <Box>
        <Tabs.Content value="cadastro-clientes">
          <Manutencao/>
        </Tabs.Content>
      </Box>
    </Tabs.Root>
  );
}
