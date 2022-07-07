import { Component, Input, OnInit } from '@angular/core';
import { Categorias } from 'src/app/enums/categorias';
import { Livro } from 'src/app/interfaces/livro';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss']
})
export class LivroComponent implements OnInit {

  @Input() livro!: Livro

  constructor() { }

  ngOnInit(): void {
  }

}
