import { Flex, Tabs } from "@radix-ui/themes";
import NovaVenda from "./NovaVenda";
import HistoricoVendas from "./HistoricoVendas";


export default function Vendas() {

  return (
    <Tabs.Root defaultValue="nova-venda">
      <Tabs.List size={"2"}>
        <Tabs.Trigger value="nova-venda">Nova venda</Tabs.Trigger>
        <Tabs.Trigger value="historico-vendas">Histórico de vendas</Tabs.Trigger>
      </Tabs.List>
      
      <Flex direction={"row"} style={{backgroundColor: "#ffffff"}}>

        <Flex direction={"row"}>
          <Tabs.Content value="nova-venda" style={{width:"85vw"}}>
            <NovaVenda/>
          </Tabs.Content>
        </Flex>

        <Flex direction={"row"}>
          <Tabs.Content value="historico-vendas" style={{width:"85vw"}}>
            <HistoricoVendas/>
          </Tabs.Content>
        </Flex>
        
      </Flex>

    </Tabs.Root>
  );
}
