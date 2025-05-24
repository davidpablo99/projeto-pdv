export interface Produto {
    _id?: string | undefined;
    imagemUrl?: string,
    nome: string;
    preco: number;
    descricao?: string;
    quantidade: number;
    categoria?: string;
    status: string;
}