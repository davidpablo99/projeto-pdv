export interface Produto {
    _id?: string | undefined;
    imagemPath?: string,
    nome: string;
    preco: number;
    descricao?: string;
    quantidade: number;
    categoria?: string;
    status: string;
}