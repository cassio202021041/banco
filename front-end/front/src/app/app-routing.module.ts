import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './conta/create/create.component';
import { EditComponent } from './conta/edit/edit.component';
import { IndexComponent } from './conta/index/index.component';
import { ViewComponent } from './conta/view/view.component';



  const routes: Routes = [
    { path: 'conta', redirectTo: 'conta/index', pathMatch: 'full' },
    { path: 'conta/index', component: IndexComponent },
    { path: 'conta/create', component: CreateComponent },
    { path: 'conta/:contaId/edit', component: EditComponent },
    { path: 'conta/:contaId/view', component: ViewComponent },
    { path: '', component: IndexComponent }  // Página inicial
  ];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
