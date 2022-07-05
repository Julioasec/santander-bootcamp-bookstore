import { Injectable } from '@angular/core';
import { Categorias } from '../enums/categorias';
import { Livro } from '../interfaces/livro'


@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  constructor() { }

  pegarLivros(): Livro[]{
    return this.livros
  }

  pegarLivro(id: number): Livro  | undefined{
    return this.livros.find(livro =>{
      return livro.id === id
    })
  }

  livros: Livro[] = [
    {
      id: 0,
      nome: 'Neuromancer',
      preco: 29.90,
      quantidade: 3,
      categoria: Categorias.ficcao,
      img: ''

    },
    {
      id: 1,
      nome: 'Bussunda a Vida do Casseta',
      preco: 17.00,
      quantidade: 30,
      categoria: Categorias.biografia,
      img: ''

    },
    {
      id: 2,
      nome: 'Contos Tradicionais do Brasil',
      preco: 10.00,
      quantidade: 22,
      categoria: Categorias.folclore,
      img: ''

    },
    {
      id: 3,
      nome: 'Dom Casmurro',
      preco: 6.00,
      quantidade: 47,
      categoria: Categorias.literaturaBrasileira,
      img: ''

    },
    {
      id: 4,
      nome: 'O Que é Marketing',
      preco: 6.00,
      quantidade: 34,
      categoria: Categorias.colecoes,
      img: ''

    },
    {
      id: 5,
      nome: 'Revista Genealogica Latina – vol8',
      preco: 40.00,
      quantidade: 10,
      categoria: Categorias.genealogia,
      img: ''

    },
    {
      id: 6,
      nome: 'O Código da Vinci',
      preco: 6.00,
      quantidade: 28,
      categoria: Categorias.literaturaEstrangeira,
      img: ''

    },
    {
      id: 7,
      nome: 'Alô, Chics!',
      preco: 6.00,
      quantidade: 4,
      categoria: Categorias.comportamento,
      img: ''

    },
    {
      id: 8,
      nome: 'As Melhores Piadas do Planeta... e da Casseta Também!',
      preco: 6.00,
      quantidade: 6,
      categoria: Categorias.humor,
      img: ''

    },
    {
      id: 9,
      nome: 'Os Lusíadas',
      preco: 15.00,
      quantidade: 60,
      categoria: Categorias.livrosRaros,
      img: ''

    }
  ]
}
