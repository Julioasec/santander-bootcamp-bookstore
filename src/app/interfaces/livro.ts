import { Categorias } from "../enums/categorias";

export interface Livro {

    id: number,
    nome: string,
    preco: number,
    quantidade: number,
    categoria: Categorias ,
    img: string
}
