import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Filtros } from 'src/app/interfaces/filtros';
import { Livro } from 'src/app/interfaces/livro';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.scss']
})
export class ProdutoListaComponent implements OnInit{

  _filtroLivros: Filtros = {
    valorMinimo: 0,
    valorMaximo: 0
  } 
  _livrosFiltrados!: Livro[]
  eventsSubscription!: Subscription

 @Input() livros!: Livro[] 
 @Input() filtros!: Filtros
 @Input() events!: Observable<void>

  constructor() { }

  ngOnInit(): void {

    this._livrosFiltrados = this.livros
    this.filtrar()

  }

  setarFiltros():void{
    this._filtroLivros = this.filtros
  }

  filtrar():void{
    this.eventsSubscription = this.events.subscribe(()=>{
      this.setarFiltros()
      
      let livrosFiltrados = this.livros
      let valorMinimo = this._filtroLivros.valorMinimo;
      let valorMaximo = this._filtroLivros.valorMaximo;

      if(valorMinimo === 0 && valorMaximo === 0){      
        livrosFiltrados = this.livros
      }

      if (valorMinimo !== 0) {
          livrosFiltrados = livrosFiltrados.filter(livro=>{
            return livro.preco >= valorMinimo
          })
      }
      
      if(valorMaximo !== 0){        
        livrosFiltrados = livrosFiltrados.filter(livro=>{
          return livro.preco <= this._filtroLivros.valorMaximo
        })
      }
     
     

      this._livrosFiltrados = livrosFiltrados
    })
  }

}
