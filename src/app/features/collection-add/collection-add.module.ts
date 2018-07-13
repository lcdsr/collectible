import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionAddRoutingModule } from './collection-add.routing';
import { CollectionAddComponent } from './containers/collection-add/collection-add.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { CollectionService } from '../../providers/collection.service';
import { RegisterComponent } from '../register/containers/register/register.component';

@NgModule({
  imports: [
    CommonModule,
    CollectionAddRoutingModule,
    FormsModule,
    IonicModule,
    SharedModule
  ],
  entryComponents: [RegisterComponent],
  declarations: [CollectionAddComponent, RegisterComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  providers:[CollectionService]
})
export class CollectionAddModule { }
