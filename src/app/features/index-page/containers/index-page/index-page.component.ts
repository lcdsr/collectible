import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
//import { UserService } from '../../../../providers/user.service';
import { Observable } from 'rxjs';
import { CollectionService } from '../../../../providers/collection.service';
import { CollectionAddComponent } from '../../../collection-add/containers/collection-add/collection-add.component';
import { ModalController } from '@ionic/angular';
import { RegisterComponent } from '../../../register/containers/register/register.component';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})


export class IndexPageComponent implements OnInit {

  item$:Observable<any>;
  collection$:Observable<any>;
  isLoggedIn = false;
  
  constructor(
    private _router: Router,
    //private _userService: UserService, 
    private _collectionService: CollectionService,
    private _modalController: ModalController) { }
  
  ngOnInit() {
    if(localStorage.getItem("userID")){
      this.isLoggedIn = true;
    }
    let id = localStorage.getItem("userID");
    //this.item$ = this._userService.getItemUser(id)
    this.collection$ = this._collectionService.getItemCollection(id)
  

    console.log(btoa("username:temppass"));
    console.log(atob("dXNlcm5hbWU6dGVtcHBhc3M="));
  }

  goCollection(cId){
    this._router.navigate(['/detail'], { queryParams: { id: cId } });    
  }
  addCollection(){
    // open m odal...
    //this._router.navigate(['/collectionAdd']);   
    this.isLoggedIn = true; 
    this.goCreateItem()
  }

  async goCreateItem() {
    const modal = await this._modalController.create({
      component: CollectionAddComponent,
      componentProps: {  }
    });
    // check on modal is dismiss
    
    modal.onDidDismiss(data => {
      let id = localStorage.getItem("userID");
      this.collection$ = this._collectionService.getItemCollection(id)
    });
    // open modal
    return await modal.present();
  }

  displayDismissData(data) {
    console.log('Modal closing...', data);
  }
  

  dismiss() {
    this._modalController.dismiss('toto');
  }
  setUser(){
    localStorage.setItem("userID","5b47a5104d293400147228e6")
  }

}
