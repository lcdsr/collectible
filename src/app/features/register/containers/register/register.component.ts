import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { ModalController, NavParams } from '@ionic/angular';
import { UserService } from '../../../../providers/user.service';
import { map } from '../../../../../../node_modules/rxjs/operators';
import { CollectionService } from '../../../../providers/collection.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public inputEmail: string = '';
  public inputPassword: string = '';
  item$: Observable<any>;
  user$: Observable<any>;
  subscription: any;
  constructor(
    private _router: Router,
    private _location: Location,
    private _navParams: NavParams,
    private _modalController: ModalController,
    private _userService: UserService,
    private _collectionService: CollectionService
  ) { }

  ngOnInit() {
    const { item } = this._navParams.data;
    this.item$ = item.name;
  }

  registerUser() {
    console.log(this.item$);

    console.log(this.inputEmail + ":" + this.inputPassword);
    console.log(btoa(this.inputEmail + ":" + this.inputPassword));
    localStorage.setItem("user", btoa(this.inputEmail + ":" + this.inputPassword));

    //enregistrer l'utilisateur
    //enregistrer l'élément dans la db
    //faire un redirect dans la collection créé avec l item rajouter
    //this.dismiss();
    let data = {
      "firstname": this.inputEmail,
      "lastname": "lastname",
      "email": this.inputEmail,
      "hash": btoa(this.inputPassword)
    }
    let uid = ""
    //this._userService.insertItemUser("id",data)
    if (this.inputEmail != "" && this.inputPassword != "") {
      this._userService.insertItemUser("uid", data)
        .toPromise()
        .then(res => {
          console.log("ma val", res._id);
          localStorage.setItem("userID", res._id)
          //this.dismiss()
          let collection = {
            "name": this.item$,
            "nbelements": 0,
            "uid": localStorage.getItem("userID")
          };
          this._collectionService.insertItemCollection(uid, collection)
            .toPromise()
            .then(res => {
            }) // renvoier sur la bonne page de collection et fermer la modale.
            .catch(err => {
              console.log(err);
              // faire p-e une alerte si erreur
            })
          //this._router.navigate(['/detail'], { queryParams: { id: res._id } });    
          this.dismiss();
        }

        ) // renvoier sur la bonne page de collection et fermer la modale.
        .catch(err => {
          console.log(err);
          // faire p-e une alerte si erreur
        })
    }
  }

  back() {
    this._location.back();
  }
  dismiss() {
    this._modalController.dismiss('register- closed');
  }
}
