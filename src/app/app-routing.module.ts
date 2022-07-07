import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './components/pages/produtos/produtos.component';
import { SobreComponent } from './components/pages/sobre/sobre.component';
import { SuporteComponent } from './components/pages/suporte/suporte.component';

const routes: Routes = [
  {path: '', redirectTo:'produtos', pathMatch:'full'},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'suporte', component: SuporteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
