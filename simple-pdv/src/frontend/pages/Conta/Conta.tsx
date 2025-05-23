import { Box, Tabs } from "@radix-ui/themes";
import Manutencao from "../Manutencao";

export default function Conta(){
    return(
      <Tabs.Root defaultValue="perfil">
      <Tabs.List size={"2"}>
        <Tabs.Trigger value="perfil">Perfil</Tabs.Trigger>
        <Tabs.Trigger value="trocar-senha">Trocar Senha</Tabs.Trigger>
        <Tabs.Trigger value="sair-logout">Sair / Logout</Tabs.Trigger>
      </Tabs.List>

      <Box className="layout-container-direito">
        <Tabs.Content value="perfil">
          <Manutencao/>
        </Tabs.Content>
      </Box>
    </Tabs.Root>
    )
}