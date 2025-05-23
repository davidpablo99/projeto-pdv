export interface Produto {
    _id?: string;
    imagemPath?: string,
    nome: string;
    preco: number;
    descricao?: string;
    quantidade: number;
    categoria?: string;
    status: string;
}