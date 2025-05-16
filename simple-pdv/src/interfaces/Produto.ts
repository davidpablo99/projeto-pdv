export interface Produto {
    id: number;
    imagem?: string,
    nome: string;
    preco: number;
    descricao?: string;
    estoque: number;
    categoria?: string;
    status: string; 
}