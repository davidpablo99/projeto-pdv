import { Box, Button, Flex, Select, Text, TextField } from "@radix-ui/themes";
import { useState, useRef } from "react";



export default function CadastroProdutos(){
    const [nome, setNome] = useState("")
    const [preco, setPreco] = useState("")
    const [descricao, setDescricao] = useState("")
    const [quantidade, setQuantidade] = useState("")
    const [status, setStatus] = useState("em-estoque")
    const [imagem, setImagem] = useState<File | null>(null)
    const inputImagemRef = useRef<HTMLInputElement | null> (null);

    function cadastrarProduto(){
      if (!imagem) return alert("Escolha uma imagem!");
      const reader = new FileReader();
      reader.onloadend = () => {
        const imagemBase64 = reader.result;
        const produto = {
          nome,
          preco,
          descricao,
          quantidade,
          status,
          imagem: imagemBase64,
        };
        fetch("http://localhost:3001/produtos", {
          method: "POST",
          headers: {"Content-Types": "application/json"},
          body: JSON.stringify(produto)
        })
        .then(res => res.json())
        .then(() => {
        alert("Produto cadastrado!");
        setNome("");
        setPreco("");
        setDescricao("");
        setQuantidade("");
        setStatus("em-estoque");
        setImagem(null);
        if (inputImagemRef.current) inputImagemRef.current.value = "";
      });
      }
      reader.readAsDataURL(imagem!);
    }

    return (
        <>
        <Box as="div" className="layout-boxs">
          <Flex>
            <Box width={"100%"}>
              <Text as="label">Nome do produto:</Text>
              <TextField.Root value={nome} onChange={(e)=> setNome(e.target.value)}/>
            </Box>
          </Flex>
          <Flex as="div" gap={"3"} my={"4"} width = "80vw">
            <Box>
              <Text as="label">Preço:</Text>
              <TextField.Root value={preco} onChange={(e)=> setPreco(e.target.value)}/>
            </Box>
            <Box>
              <Text as="label">Descrição:</Text>
              <TextField.Root placeholder="Opcional" value={descricao} onChange={(e)=> setDescricao(e.target.value)}/>
            </Box>
            <Box>
              <Text as="label">Quantidade em estoque:</Text>
              <TextField.Root value={quantidade} onChange={(e)=> setQuantidade(e.target.value)}/>
            </Box>
          <Flex as="div" gap={"3"} gridColumn={"4"}>
            <Box>
                <Box>
                <Text>Status:</Text>
                </Box>
                <Select.Root defaultValue="em-estoque" value={status} onValueChange={setStatus}>
                    <Select.Trigger/>
                    <Select.Content>
                        <Select.Group>
                        <Select.Item value="em-estoque">Em estoque</Select.Item>
                        <Select.Item value="esgotado">Esgotado</Select.Item>
                        </Select.Group>
                    </Select.Content>
                </Select.Root>
            </Box>
          </Flex>
          </Flex>
          <Flex>
            <Box>
              <Text as="label">Imagem do Produto:</Text><br />
              {
                imagem &&(
                  <Box mt="3">
                    <Text>Preview:</Text><br />
                    <img 
                      src={URL.createObjectURL(imagem)} 
                      alt="preview" 
                      style={{ width: "150px", borderRadius: "8px" }} 
                    />
                  </Box>
                )
              }
              <input 
                type="file" 
                onChange={(e)=> setImagem(e.target.files?.[0] || null)}
                ref={inputImagemRef}
              />
            </Box>
          </Flex>
          <br />
          <Flex>
            <Button onClick={cadastrarProduto}>Cadastrar Produto</Button>
          </Flex>
        </Box>
      </>
    )
}