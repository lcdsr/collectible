import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'detail',
    loadChildren:'./features/collection-detail/collection-detail.module#CollectionDetailModule'
  },
  {
    path:'collectionAdd',
    loadChildren:'./features/collection-add/collection-add.module#CollectionAddModule'
  },
  {
    path:'itemAdd',
    loadChildren:'./features/item-add/item-add.module#ItemAddModule'
  },
  {
    path:'itemDetail',
    loadChildren:'./features/item-detail/item-detail.module#ItemDetailModule'
  },
  {
    path:'register',
    loadChildren:'./features/register/register.module#RegisterModule'
  },
  { path: '',
    loadChildren:'./features/index-page/index-page.module#IndexPageModule'
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
