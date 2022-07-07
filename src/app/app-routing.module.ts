import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './components/pages/produtos/produtos.component';
import { SobreComponent } from './components/pages/sobre/sobre.component';

const routes: Routes = [
  {path: '', redirectTo:'produtos', pathMatch:'full'},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'sobre', component: SobreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
