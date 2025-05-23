import { Box, Tabs } from "@radix-ui/themes";
import Manutencao from "../Manutencao";

export default function Financeiro() {
  return (
    <Tabs.Root defaultValue="resumo-financeiro">
      <Tabs.List size={"2"}>
        <Tabs.Trigger value="resumo-financeiro">Resumo Financeiro</Tabs.Trigger>
      </Tabs.List>

      <Box className="layout-container-direito">
        <Tabs.Content value="resumo-financeiro">
          <Manutencao/>
        </Tabs.Content>
      </Box>
    </Tabs.Root>
  );
}
