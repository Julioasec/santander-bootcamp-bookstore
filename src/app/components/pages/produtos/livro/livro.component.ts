import { Component, OnInit } from '@angular/core';
import { Categorias } from 'src/app/enums/categorias';
import { Livro } from 'src/app/interfaces/livro';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss']
})
export class LivroComponent implements OnInit {

  livro!: Livro

  constructor() { }

  ngOnInit(): void {
    this.livro = {
      id: 0,
      nome: "Cafunga",
      preco: 22,
      quantidade: 3,
      categoria: Categorias.biografia,
      img: "nenhuma"
    }
  }

}
