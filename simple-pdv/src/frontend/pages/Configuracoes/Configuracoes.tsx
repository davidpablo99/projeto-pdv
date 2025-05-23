import { Box, Tabs } from "@radix-ui/themes";
import Manutencao from "../Manutencao";

export default function Configuracoes() {
  return (
    <Tabs.Root defaultValue="usuario-permissoes">
      <Tabs.List size={"2"}>
        <Tabs.Trigger value="usuario-permissoes">Usuários e Permissões</Tabs.Trigger>
        <Tabs.Trigger value="dados-loja">Dados da Loja</Tabs.Trigger>
        <Tabs.Trigger value="metodos-pagamento">Métodos de Pagamento</Tabs.Trigger>
        <Tabs.Trigger value="tema-interface">Tema/Interface</Tabs.Trigger>
      </Tabs.List>

      <Box className="layout-container-direito">
        <Tabs.Content value="usuario-permissoes">
          <Manutencao/>
        </Tabs.Content>
      </Box>
    </Tabs.Root>
  );
}
