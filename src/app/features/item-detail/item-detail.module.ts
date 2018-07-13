import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemDetailRoutingModule } from './item-detail.routing';
import { ItemDetailComponent } from './containers/item-detail/item-detail.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';
import { ItemService } from '../../providers/item.service';

@NgModule({
  imports: [
    CommonModule,
    ItemDetailRoutingModule,
    IonicModule,
    SharedModule
  ],
  declarations: [ItemDetailComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers:[ItemService]
})
export class ItemDetailModule { }
