import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionDetailComponent } from './containers/collection-detail/collection-detail.component';

const routes: Routes = [
  {
    path:'',
    component: CollectionDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionDetailRoutingModule { }
