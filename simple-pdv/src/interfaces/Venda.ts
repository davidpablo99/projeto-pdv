import type { Produto } from "./Produto"

export type Venda = {
    id: string,
    produtos: Produto[],
    total: number,
    desconto: number,
    endereco: string | null,
    metodoPagamento: string,
    data: string
}