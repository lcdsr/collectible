import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionAddComponent } from './containers/collection-add/collection-add.component';

const routes: Routes = [
  {
    path:'',
    component: CollectionAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionAddRoutingModule { }
