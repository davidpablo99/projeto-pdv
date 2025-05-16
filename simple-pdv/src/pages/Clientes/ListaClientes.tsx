import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Flex, Table, TextArea, TextField } from "@radix-ui/themes";

export default function ListaClientes(){
    return(
        <Flex direction={"column"} style={{backgroundColor: "#e1dfdf"}}>
            <Flex my={"4"}>
                <TextField.Root placeholder="Pesquisar Cliente…" size={"3"} style={{width:"100%"}}>
                    <TextField.Slot>
                        <MagnifyingGlassIcon height="16" width="16" />
                    </TextField.Slot>
                </TextField.Root>
            </Flex>
            <Flex my={"4"}>
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
                            <Table.RowHeaderCell>David</Table.RowHeaderCell>
                            <Table.Cell>Teste Endereço</Table.Cell>
                            <Table.Cell>Teste idade</Table.Cell>
                            <Table.Cell>Teste telefone</Table.Cell>
                            <Table.Cell>
                                <TextArea value={""}/>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.RowHeaderCell>Marcos</Table.RowHeaderCell>
                            <Table.Cell>Teste Endereço</Table.Cell>
                            <Table.Cell>Teste idade</Table.Cell>
                            <Table.Cell>Teste telefone</Table.Cell>
                            <Table.Cell>
                                <TextArea value={""}/>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table.Root>
            </Flex>
        </Flex>
    )
}