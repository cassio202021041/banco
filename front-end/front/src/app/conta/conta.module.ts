import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { IndexComponent } from './index/index.component';



@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    ViewComponent,
    IndexComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContaModule { }
