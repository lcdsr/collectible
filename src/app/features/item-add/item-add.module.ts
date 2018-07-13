import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemAddRoutingModule } from './item-add.routing';
import { ItemAddComponent } from './containers/item-add/item-add.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ItemService } from '../../providers/item.service';

@NgModule({
  imports: [
    CommonModule,
    ItemAddRoutingModule,
    IonicModule,
    FormsModule,
    SharedModule
  ],
  declarations: [ItemAddComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers:[ItemService]

})
export class ItemAddModule { }
