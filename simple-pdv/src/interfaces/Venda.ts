export type Venda = {
    id: number ,
    produtos: string[],
    total: number,
    desconto: number,
    endereco: string | null,
    metodoPagamento: string,
    data: string
}