import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/interfaces/livro';
import { LivrosService } from 'src/app/services/livros.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  _listaDeLivros!: Livro[]

  constructor(private livrosService: LivrosService) { }

  ngOnInit(): void {
    this.resgatarLivros()
  }

  resgatarLivros(): void{
     let livros = this.livrosService.pegarLivros()
     this._listaDeLivros = livros    
  }

}
