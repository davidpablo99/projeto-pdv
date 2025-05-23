export type Venda = {
    _id?: string ,
    produtos: string[],
    total: number,
    taxaEntrega: number,
    desconto: number,
    entregue: boolean,
    endereco: string | null,
    metodoPagamento: string,
    data: string
}