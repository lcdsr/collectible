import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionDetailRoutingModule } from './collection-detail.routing';
import { CollectionDetailComponent } from './containers/collection-detail/collection-detail.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';
import { ItemService } from '../../providers/item.service';
import { ItemDetailComponent } from '../item-detail/containers/item-detail/item-detail.component';

@NgModule({
  imports: [
    CommonModule,
    CollectionDetailRoutingModule,
    SharedModule,
    IonicModule,
    SharedModule
  ],
  entryComponents: [ItemDetailComponent],
  declarations: [CollectionDetailComponent,ItemDetailComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers:[ItemService]
})
export class CollectionDetailModule { }
