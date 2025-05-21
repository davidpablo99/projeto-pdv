import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Box, Button, Checkbox, Flex, RadioGroup, ScrollArea, Text, TextField } from "@radix-ui/themes";
import { CardProduto } from "../Produtos/CardProduto";
import type { Produto } from "../../interfaces/Produto";
import { useEffect, useState } from "react";
import type { Venda } from "../../interfaces/Venda";



export default function NovaVenda(){
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [carrinho, setCarrinho] = useState<Produto[]>([]);
    const [total, setTotal] = useState(0);
    const [mostrarDesconto, setMostrarDesconto] = useState(false);
    const [mostrarEndereco, setMostrarEndereco] = useState(false);
    const [endereco, setEndereco] = useState("");
    const [desconto, setDesconto] = useState(0);
    const [descontoAplicado, setDescontoAplicado] = useState(false)
    // const [venda, setVenda] = useState<Venda[]>([])
    const [metodoPagamento, setMetodoPagamento] = useState<string>("dinheiro")
    const dbVendas = "https://db-simple-pdv-david.vercel.app/vendas"
    const dbProdutos = "https://db-simple-pdv-david.vercel.app/produtos"

    function limparCampos(){
      setCarrinho([])
      setTotal(0)
      setDesconto(0)
      setEndereco("")
      setMostrarDesconto(false)
      setMetodoPagamento("dinheiro")
      setMostrarEndereco(false)
      setDescontoAplicado(false)
    }

    function gerarId(vendas: Venda[]): number {
      if(vendas.length === 0) return 1
      const ids = vendas.map((v) => Number(v.id));
      return Math.max(...ids) + 1;
    }

    async function fecharVenda(){
    if ( carrinho.length === 0){
      alert("Carrinho vazio. Adicione produtos antes de fechar a venda.");
      return
    }
    try{
      const resposta = await fetch(dbVendas); // Faltou o await aqui!
      const vendasExistentes: Venda[] = await resposta.json();
      const novoId = gerarId(vendasExistentes); // Estava usando 'venda', mas o correto é 'vendasExistentes'

      const novaVenda: Venda = {
        id: novoId,
        produtos: carrinho.map((item)=> item.nome),
        total: total,
        entregue: false,
        desconto: desconto,
        endereco: mostrarEndereco ? endereco : null,
        metodoPagamento: metodoPagamento,
        data: new Date().toLocaleDateString("pt-BR") + " às " + new Date().toLocaleTimeString("pt-BR", {
          hour: '2-digit',
          minute: "2-digit"
        })
      };

      const respostaPost = await fetch(dbVendas, {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(novaVenda)
      });

      const data = await respostaPost.json();
      console.log("Venda registrada:", data);
      alert("Venda finalizada com sucesso!");

      // setVenda([...vendasExistentes, novaVenda]);
      limparCampos();
    } catch (err) {
      console.error("Erro ao registrar venda:", err);
      alert("Erro ao finalizar a venda");
    }
  }

    function adicionarAoCarrinho(produto:Produto){
      setCarrinho((prev) => [...prev, produto]);
    };

    function aplicarDescontoManual() {
      if (mostrarDesconto && desconto > 0 && !descontoAplicado) {
        const totalCarrinho = carrinho.reduce((soma, prod) => soma + Number(prod.preco), 0);
        let novoTotal = totalCarrinho - desconto;
        if (novoTotal < 0) novoTotal = 0;
        setTotal(novoTotal);
        setDescontoAplicado(true);
        setDesconto(0);
      }
    }

    useEffect(()=>{
      if (!descontoAplicado){
      const totalCarrinho = carrinho.reduce((somaTotal, produtoAtual) => {
        return somaTotal + Number(produtoAtual.preco);
      }, 0);

      setTotal(totalCarrinho);
      }
    }, [carrinho]);

    useEffect(()=>{
      fetch(dbProdutos)
      .then(resp=> resp.json())
      .then(data => setProdutos(data))
      .catch(err => console.error("Erro ao buscar produto:", err));
    }, [])

    return (
        <Flex direction={"row"} align={"center"} justify={"center"}>
              {/* SECTION DE CARRINHO E VENDA */}
              <Box className="layout-container-direito" mx={"1vw"} style={{backgroundColor: "#ffffff"}}>
                
                <Flex direction={"column"} style={{backgroundColor: "#f4f4f4", height: "45%",width: "100%", marginTop: "1vw", marginBottom: "1vw", padding: "1vw", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"}}>
                  <Flex style={{marginBottom: "1vw"}}>
                    <h2>Carrinho</h2>
                  </Flex>
                    <ScrollArea>
                      {carrinho.map(produto=>(
                        <CardProduto 
                          key={produto.id} 
                          produto={produto}
                          onAdicionar ={()=> adicionarAoCarrinho(produto)}
                        />
                      ))}
                    </ScrollArea>
                </Flex>
                <Flex style={{backgroundColor: "#f4f4f4", height: "35%",width: "100%", marginTop: "2vw", marginBottom: "1vw", padding: "1vw", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"}} align={"center"}>
                  <Box>
                    <h2>Checkout</h2>
                    <Flex direction={"column"} >
                      <Text as="label">Método de pagamento:</Text>
                      <RadioGroup.Root value={metodoPagamento ?? null} onValueChange={(value) => setMetodoPagamento(value)}>
                        <RadioGroup.Item value="dinheiro">Dinheiro</RadioGroup.Item>
                        <RadioGroup.Item value="debito">Débito</RadioGroup.Item>
                        <RadioGroup.Item value="credito">Crédito</RadioGroup.Item>
                        <RadioGroup.Item value="pix">Pix</RadioGroup.Item>
                      </RadioGroup.Root>
                    </Flex>
                  </Box>
                  <Box mx={"4"}>

                    <Flex gap={"4"} align={"center"}>
                      <Text as="label">Aplicar desconto?</Text>
                      <Checkbox 
                        checked={mostrarDesconto} 
                        onCheckedChange={(value) => setMostrarDesconto(!!value)}
                        />
                    </Flex>
                    {
                      mostrarDesconto && (
                        <Flex gap={"2"} align="center" my={"2"}>
                          <TextField.Root
                            placeholder="Digite o desconto em R$"
                            type="number"
                            style={{width: "25vw"}}
                            my={"2"}
                            value={desconto.toString()}
                            onChange={(e)=> setDesconto(Number(e.target.value))}
                          />
                          <Button onClick={aplicarDescontoManual}>Aplicar</Button>
                        </Flex>
                      )
                    }
                    <Flex gap={"4"} align={"center"}>
                      <Text as="label">Entregar?</Text>
                      <Checkbox 
                        checked={mostrarEndereco} 
                        onCheckedChange={(value) => {
                          setMostrarEndereco(!!value)
                          
                        }}

                      />
                    </Flex>
                    {
                      mostrarEndereco && (
                        <TextField.Root
                          placeholder="Digite um endereço para entrega..."
                          style={{width: "25vw"}}
                          my={"2"}
                          value={endereco}
                          onChange={(e) => setEndereco(e.target.value)}
                        />
                      )
                    }
                    <Flex gap={"4"}>
                      <Text>Total: {total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</Text>
                    </Flex>

                  </Box>
                </Flex>
                <Flex justify={"center"} gap={"4"} my={"5"}>
                  <Button onClick={fecharVenda}>Fechar venda</Button>
                  <Button onClick={limparCampos}>Limpar Campos</Button>
                </Flex>
              </Box>

              {/* DAQUI PRA BAIXO É A SECTION DE PRODUTOS */}
              <Box className="layout-container-direito" style={{backgroundColor: "#ffffff", margin: "1em", padding:"1em"}} width={"35vw"} height={"45vw"}>
                  <TextField.Root placeholder="Pesquisar produto...">
                    <TextField.Slot>
                      <MagnifyingGlassIcon/>
                    </TextField.Slot>
                  </TextField.Root>
                  <br />
                  <Text style={{fontWeight:"bold"}}>Produtos:</Text>
                <ScrollArea my={"3"} style={{height: "35vw"}}>
                  {produtos.map(produto=>(
                    <CardProduto 
                      key={produto.id} 
                      produto={produto}
                      onAdicionar={()=> adicionarAoCarrinho(produto)}
                    />
                  ))}
                </ScrollArea>
              </Box>
            </Flex>
    )
}