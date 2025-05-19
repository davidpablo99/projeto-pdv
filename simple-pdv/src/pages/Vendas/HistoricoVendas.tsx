import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Box, Button, Checkbox, Flex, ScrollArea, Table, Text, TextArea, TextField } from "@radix-ui/themes";

export default function HistoricoVendas(){
    return(
        <Flex direction={"row"} >

          <Box className="layout-container-direito" >
              <Box style={{backgroundColor: "white",padding: "1vw", boxShadow: "5px 5px 8px rgba(0, 0, 0, 0.3)"}}>
                <Flex direction={"row"} gap={"4"} align={"center"}>
                  <Text as="label">ID</Text>
                  <TextField.Root></TextField.Root>
                  <Text as="label">Data</Text>
                  
                  <Button>
                    <MagnifyingGlassIcon/>
                    Pesquisar
                  </Button>
                </Flex>

                <Flex my={"4"}>
                <ScrollArea  >
                <Table.Root variant="surface" style={{width:"77vw",height: "35vw"}}>
                    <Table.Header>
                        <Table.Row>
                            <Table.RowHeaderCell>ID</Table.RowHeaderCell>
                            <Table.RowHeaderCell>Total</Table.RowHeaderCell>
                            <Table.RowHeaderCell>Entrega</Table.RowHeaderCell>
                            <Table.RowHeaderCell>Pagamento</Table.RowHeaderCell>
                            <Table.RowHeaderCell>Data</Table.RowHeaderCell>
                            <Table.RowHeaderCell>Observação</Table.RowHeaderCell>
                            <Table.RowHeaderCell>Opções</Table.RowHeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>

                        <Table.Row>
                            <Table.RowHeaderCell>123123</Table.RowHeaderCell>
                            <Table.Cell>R$ 233,00</Table.Cell>
                            <Table.Cell>
                              <Checkbox mx={"3"}/>
                              </Table.Cell>
                            <Table.Cell>Pix</Table.Cell>
                            <Table.Cell>18/05/2025 14:24</Table.Cell>
                            <Table.Cell>
                                <TextArea value={""}/>
                            </Table.Cell>
                            <Table.Cell>
                              <Button mx={"3"} color="cyan">Editar</Button>
                              <Button color="tomato">Excluir</Button>
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.RowHeaderCell>123123</Table.RowHeaderCell>
                            <Table.Cell>R$ 123,00</Table.Cell>
                            <Table.Cell>
                              <Checkbox mx={"3"}/>
                            </Table.Cell>
                            <Table.Cell>Débito</Table.Cell>
                            <Table.Cell>18/05/2025 14:24</Table.Cell>
                            <Table.Cell>
                                <TextArea value={""}/>
                            </Table.Cell>
                            <Table.Cell>
                              <Button mx={"3"} color="cyan">Editar</Button>
                              <Button color="tomato">Excluir</Button>
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.RowHeaderCell>123123</Table.RowHeaderCell>
                            <Table.Cell>R$ 123,00</Table.Cell>
                            <Table.Cell>
                              <Checkbox mx={"3"}/>
                            </Table.Cell>
                            <Table.Cell>Débito</Table.Cell>
                            <Table.Cell>18/05/2025 14:24</Table.Cell>
                            <Table.Cell>
                                <TextArea value={""}/>
                            </Table.Cell>
                            <Table.Cell>
                              <Button mx={"3"} color="cyan">Editar</Button>
                              <Button color="tomato">Excluir</Button>
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.RowHeaderCell>123123</Table.RowHeaderCell>
                            <Table.Cell>R$ 123,00</Table.Cell>
                            <Table.Cell>
                              <Checkbox mx={"3"}/>
                            </Table.Cell>
                            <Table.Cell>Débito</Table.Cell>
                            <Table.Cell>18/05/2025 14:24</Table.Cell>
                            <Table.Cell>
                                <TextArea value={""}/>
                            </Table.Cell>
                            <Table.Cell>
                              <Button mx={"3"} color="cyan">Editar</Button>
                              <Button color="tomato">Excluir</Button>
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.RowHeaderCell>123123</Table.RowHeaderCell>
                            <Table.Cell>R$ 123,00</Table.Cell>
                            <Table.Cell>
                              <Checkbox mx={"3"}/>
                            </Table.Cell>
                            <Table.Cell>Débito</Table.Cell>
                            <Table.Cell>18/05/2025 14:24</Table.Cell>
                            <Table.Cell>
                                <TextArea value={""}/>
                            </Table.Cell>
                            <Table.Cell>
                              <Button mx={"3"} color="cyan">Editar</Button>
                              <Button color="tomato">Excluir</Button>
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.RowHeaderCell>123123</Table.RowHeaderCell>
                            <Table.Cell>R$ 123,00</Table.Cell>
                            <Table.Cell>
                              <Checkbox mx={"3"}/>
                            </Table.Cell>
                            <Table.Cell>Débito</Table.Cell>
                            <Table.Cell>18/05/2025 14:24</Table.Cell>
                            <Table.Cell>
                                <TextArea value={""}/>
                            </Table.Cell>
                            <Table.Cell>
                              <Button mx={"3"} color="cyan">Editar</Button>
                              <Button color="tomato">Excluir</Button>
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.RowHeaderCell>123123</Table.RowHeaderCell>
                            <Table.Cell>R$ 123,00</Table.Cell>
                            <Table.Cell>
                              <Checkbox mx={"3"}/>
                            </Table.Cell>
                            <Table.Cell>Débito</Table.Cell>
                            <Table.Cell>18/05/2025 14:24</Table.Cell>
                            <Table.Cell>
                                <TextArea value={""}/>
                            </Table.Cell>
                            <Table.Cell>
                              <Button mx={"3"} color="cyan">Editar</Button>
                              <Button color="tomato">Excluir</Button>
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.RowHeaderCell>123123</Table.RowHeaderCell>
                            <Table.Cell>R$ 123,00</Table.Cell>
                            <Table.Cell>
                              <Checkbox mx={"3"}/>
                            </Table.Cell>
                            <Table.Cell>Débito</Table.Cell>
                            <Table.Cell>18/05/2025 14:24</Table.Cell>
                            <Table.Cell>
                                <TextArea value={""}/>
                            </Table.Cell>
                            <Table.Cell>
                              <Button mx={"3"} color="cyan">Editar</Button>
                              <Button color="tomato">Excluir</Button>
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.RowHeaderCell>123123</Table.RowHeaderCell>
                            <Table.Cell>R$ 123,00</Table.Cell>
                            <Table.Cell>
                              <Checkbox mx={"3"}/>
                            </Table.Cell>
                            <Table.Cell>Débito</Table.Cell>
                            <Table.Cell>18/05/2025 14:24</Table.Cell>
                            <Table.Cell>
                                <TextArea value={""}/>
                            </Table.Cell>
                            <Table.Cell>
                              <Button mx={"3"} color="cyan">Editar</Button>
                              <Button color="tomato">Excluir</Button>
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.RowHeaderCell>123123</Table.RowHeaderCell>
                            <Table.Cell>R$ 123,00</Table.Cell>
                            <Table.Cell>
                              <Checkbox mx={"3"}/>
                            </Table.Cell>
                            <Table.Cell>Débito</Table.Cell>
                            <Table.Cell>18/05/2025 14:24</Table.Cell>
                            <Table.Cell>
                                <TextArea value={""}/>
                            </Table.Cell>
                            <Table.Cell>
                              <Button mx={"3"} color="cyan">Editar</Button>
                              <Button color="tomato">Excluir</Button>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>

                </Table.Root>
                </ScrollArea>
              </Flex>

            </Box>
          </Box>
        </Flex>
    )
}