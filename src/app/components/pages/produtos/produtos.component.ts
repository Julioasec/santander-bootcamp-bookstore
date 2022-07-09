import { Component, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Filtros } from 'src/app/interfaces/filtros';
import { Livro } from 'src/app/interfaces/livro';
import { LivrosService } from 'src/app/services/livros.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  _listaDeLivros!: Livro[]
  inputValorMinimo = document.getElementsByName('valorMinimo') as NodeListOf<HTMLInputElement>  
  inputValorMaximo = document.getElementsByName('valorMaximo') as NodeListOf<HTMLInputElement>
  
  eventSubject: Subject<void> = new Subject<void>()

  filtro: Filtros = {
    valorMinimo: 0,
    valorMaximo:0
  }

  constructor(private livrosService: LivrosService) { }

  ngOnInit(): void {
    this.resgatarLivros()
  }

  resgatarLivros(): void{
     let livros = this.livrosService.pegarLivros()
     this._listaDeLivros = livros    
  }

  filtrar():void{
    let minimo: number = +this.inputValorMinimo[0].value || 0
    let maximo: number = +this.inputValorMaximo[0].value || 0
        
    if(minimo >=0 || maximo >=0){
      this.filtro.valorMinimo = minimo;
      this.filtro.valorMaximo = maximo;
    }       
    this.eventSubject.next()
  }

}
