export type Venda = {
    id: number ,
    produtos: string[],
    total: number,
    desconto: number,
    entregue: boolean,
    endereco: string | null,
    metodoPagamento: string,
    data: string
}