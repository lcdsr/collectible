import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexPageRoutingModule } from './index-page.routing';
import { IndexPageComponent } from './containers/index-page/index-page.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../providers/user.service';
import { SharedModule } from '../../shared/shared.module';
import { CollectionService } from '../../providers/collection.service';
import { CollectionAddComponent } from '../collection-add/containers/collection-add/collection-add.component';
import { RegisterComponent } from '../register/containers/register/register.component';


@NgModule({
  imports: [
    CommonModule,
    IndexPageRoutingModule,
    FormsModule,
    IonicModule,
    SharedModule
  ],
  entryComponents: [CollectionAddComponent,RegisterComponent],
  declarations: [IndexPageComponent,CollectionAddComponent,RegisterComponent],
  providers:[CollectionService,UserService]
})
export class IndexPageModule { }
