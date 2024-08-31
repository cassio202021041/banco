import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransacaoFormComponent } from './components/transacao-form/transacao-form.component';


const routes: Routes = [
  { path: '', component: TransacaoFormComponent },  // Define o formulário como a página inicial
  { path: 'edit/:id', component: TransacaoFormComponent },
  { path: 'create', component: TransacaoFormComponent },
  { path: '**', redirectTo: '' }  // Redireciona qualquer outra rota para a rota inicial
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
