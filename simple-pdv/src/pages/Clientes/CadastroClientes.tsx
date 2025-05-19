import { Avatar, Box, Flex, Text, TextArea, TextField } from "@radix-ui/themes";
// import type { Cliente } from "../../interfaces/Cliente";

// interface ClienteProps{
//     cliente: Cliente
// }

// function handleCadastrarCliente({cliente: ClienteProps}){
//     return (
//     const nome = cliente.nome;
//     const idade =cliente.idade
//     const endereco =cliente.endereco
//     const telefone =cliente.telefone
//     )
// }

export default function CadastroClientes(){
    return (
        <Box className="layout-container-direito" >
            <Box className="layout-boxs">
                <Flex my={"3"}>
                    <Box>
                        <Text as="label">Avatar:</Text><br />
                        <Avatar my={"4"} size={"7"} src="" fallback></Avatar><br />
                        <input type="file" defaultValue={""}/>
                    </Box>
                </Flex>
                <Flex as="div" width = "80vw" gap={"5"}>
                    <Box width={"100%"}>
                        <Text as="label">Nome:</Text>
                        <TextField.Root/>
                    </Box>
                    <Box width={"100%"}>
                        <Text as="label">Endereço:</Text>
                        <TextField.Root/>
                    </Box>
                </Flex>
                <Flex as="div" gap={"5"} my={"4"}>
                    <Box width={"100%"}>
                        <Text as="label">Telefone:</Text>
                        <TextField.Root/>
                    </Box>
                    <Box width={"100%"}>
                        <Text as="label">Observação:</Text>
                        <TextArea placeholder="Opcional" value={""} size={"3"}/>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}