import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livro } from 'src/app/interfaces/livro';
import { LivrosService } from 'src/app/services/livros.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  id!: number
  livro!: Livro


  constructor(private route: ActivatedRoute, private livrosService: LivrosService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!
    this.resgatarLivro()
  }

  resgatarLivro(): void{
    this.livro = this.livrosService.pegarLivro(this.id)!
  }

}
