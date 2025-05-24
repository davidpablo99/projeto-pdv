export interface Produto {
    _id?: string;
    imagemUrl?: string,
    nome: string;
    preco: number;
    descricao?: string;
    quantidade: number;
    categoria?: string;
    status: string;
}