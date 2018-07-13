import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemAddComponent } from './containers/item-add/item-add.component';

const routes: Routes = [
  {
    path:'',
    component:ItemAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemAddRoutingModule { }
