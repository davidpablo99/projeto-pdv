import { Flex, Table, TextArea } from "@radix-ui/themes";

export default function ListaClientes(){
    return(
        <Flex>
            <Table.Root variant="surface" style={{width:"80vw"}}>
                <Table.Header>
                    <Table.Row>
                        <Table.RowHeaderCell>Nome</Table.RowHeaderCell>
                        <Table.RowHeaderCell>Endereço</Table.RowHeaderCell>
                        <Table.RowHeaderCell>Idade</Table.RowHeaderCell>
                        <Table.RowHeaderCell>Telefone</Table.RowHeaderCell>
                        <Table.RowHeaderCell>Observações</Table.RowHeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.RowHeaderCell>Feijoada pequena</Table.RowHeaderCell>
                        <Table.Cell>Teste descrição</Table.Cell>
                        <Table.Cell>Teste preço</Table.Cell>
                        <Table.Cell>Teste quantidade</Table.Cell>
                        <Table.Cell>
                            <TextArea value={""}/>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.RowHeaderCell>Feijoada pequena</Table.RowHeaderCell>
                        <Table.Cell>Teste descrição</Table.Cell>
                        <Table.Cell>Teste preço</Table.Cell>
                        <Table.Cell>Teste quantidade</Table.Cell>
                        <Table.Cell>
                            <TextArea value={""}/>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table.Root>
        </Flex>
    )
}