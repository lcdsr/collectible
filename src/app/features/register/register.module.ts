import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register.routing';
import { RegisterComponent } from './containers/register/register.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { UserService } from '../../providers/user.service';


@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    IonicModule,
    SharedModule
  ],
  declarations: [RegisterComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  providers:[UserService],
})
export class RegisterModule { }
