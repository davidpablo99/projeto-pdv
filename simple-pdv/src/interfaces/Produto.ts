export interface Produto {
    id: number;
    imagem?: string,
    nome: string;
    preco: number;
    descricao?: string;
    quantidade: number;
    categoria?: string;
    status: string;
}