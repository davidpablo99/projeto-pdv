import { Box, Tabs, Text } from "@radix-ui/themes";
import Manutencao from "../Manutencao";

export default function Vendas() {
  return (
    <Tabs.Root defaultValue="nova-venda">
      <Tabs.List size={"2"}>
        <Tabs.Trigger value="nova-venda">Nova venda</Tabs.Trigger>
        <Tabs.Trigger value="historico-vendas">Histórico de vendas</Tabs.Trigger>
      </Tabs.List>

      <Box>
        <Tabs.Content value="nova-venda">
          <Text>Nova venda</Text>
          <Manutencao/>
        </Tabs.Content>
        <Tabs.Content value="historico-vendas">
          <Text>Histórico de vendas</Text>
          <Manutencao/>
        </Tabs.Content>
      </Box>
    </Tabs.Root>
  );
}
