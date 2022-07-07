import { Component, Input, OnInit } from '@angular/core';
import { Livro } from 'src/app/interfaces/livro';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.scss']
})
export class ProdutoListaComponent implements OnInit {

 @Input() livros!: Livro[] 

  constructor() { }

  ngOnInit(): void {
  }

}
