import { Box, Tabs } from "@radix-ui/themes";

export default function Relatorios() {
  return (
    <Tabs.Root defaultValue="relatorio-periodo">
      <Tabs.List size={"2"}>
        <Tabs.Trigger value="relatorio-periodo">Relatório de Vendas por Período</Tabs.Trigger>
        <Tabs.Trigger value="produto">Produtos Mais Vendidos</Tabs.Trigger>
        <Tabs.Trigger value="relatorio-lucro">Relatório de Lucro</Tabs.Trigger>
      </Tabs.List>

      <Box>
        <Tabs.Content value="relatorio-periodo">
          
        </Tabs.Content>
      </Box>
    </Tabs.Root>
  );
}
