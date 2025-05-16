import { Badge, Flex, Table } from "@radix-ui/themes";

export default function ListaProdutos(){
    return(
        <Flex>
            <Table.Root variant="surface" style={{width:"80vw"}}>
                <Table.Header>
                    <Table.Row>
                        <Table.RowHeaderCell>Nome do Produto</Table.RowHeaderCell>
                        <Table.RowHeaderCell>Descrição</Table.RowHeaderCell>
                        <Table.RowHeaderCell>Preço</Table.RowHeaderCell>
                        <Table.RowHeaderCell>Quantidade em estoque</Table.RowHeaderCell>
                        <Table.RowHeaderCell>Status</Table.RowHeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.RowHeaderCell>Feijoada pequena</Table.RowHeaderCell>
                        <Table.Cell>Teste descrição</Table.Cell>
                        <Table.Cell>Teste preço</Table.Cell>
                        <Table.Cell>Teste quantidade</Table.Cell>
                        <Table.Cell>
                            <Badge color="green">
                                Em Estoque
                            </Badge>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.RowHeaderCell>Feijoada pequena</Table.RowHeaderCell>
                        <Table.Cell>Teste descrição</Table.Cell>
                        <Table.Cell>Teste preço</Table.Cell>
                        <Table.Cell>Teste quantidade</Table.Cell>
                        <Table.Cell>
                            <Badge color="red">
                                Esgotado
                            </Badge>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table.Root>
        </Flex>
    )
}