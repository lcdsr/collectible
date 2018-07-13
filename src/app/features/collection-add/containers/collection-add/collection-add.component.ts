import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { CollectionService } from '../../../../providers/collection.service';
import { ModalController,NavController } from '@ionic/angular';
import { RegisterUserComponent } from '../register-user/register-user.component';
import { RegisterComponent } from '../../../register/containers/register/register.component';


@Component({
  selector: 'app-collection-add',
  templateUrl: './collection-add.component.html',
  styleUrls: ['./collection-add.component.css']
})
export class CollectionAddComponent implements OnInit {

  collection$: Observable<any>;
  inputColName: string = '';
  
  constructor(
    private _location: Location,
    private _collectionService: CollectionService,
    private _modalController: ModalController,
    private _navController: NavController
  ) { }

  ngOnInit() {
  }

  save() {

    
    //this.viewCtrl.component.inputColNames
    console.log("collection name: ",this.inputColName);

    if(localStorage.getItem("userID") && this.inputColName!=""){
      let uid = localStorage.getItem("userID")
      let data = {
        "name":this.inputColName,
        "nbelements":0,
        "uid": uid
      };

    //working need to get param
    this._collectionService.insertItemCollection(uid,data)
    .toPromise()
    .then(res => this.dismiss()) // renvoier sur la bonne page de collection et fermer la modale.
    .catch(err =>{
      console.log(err);
      // faire p-e une alerte si erreur
    })
    }else{
      if(this.inputColName!=""){
        console.log("you must be logged to save your collection");
        //appel a la modal de save
        this.goCreateUser("23232")
      }
    }
  }

  async goCreateUser(userID: string) {
    console.log('userID', userID);
    const modal = await this._modalController.create({
      component: RegisterComponent,
      componentProps: {
        item: {
          id: userID,
          name:this.inputColName,
          data: `http://www.assuropoil.fr/wp-content/uploads/assurance-chat-assurer-son-chat1.jpg`
        }
      }
    });
    // check on modal is dismiss
    modal.onDidDismiss(data => this.dismiss());
    // open modal
    return await modal.present();
  }

  displayDismissData(data) {
    console.log('Modal closing...', data);
  }

  back() {
    //this._router.navigate([{}]);
    //this._router.navigateByUrl('');
    this._location.back();
    //this.dismiss()

  }
  dismiss() {
    this._modalController.dismiss('collection-add - closed');
  }
}
