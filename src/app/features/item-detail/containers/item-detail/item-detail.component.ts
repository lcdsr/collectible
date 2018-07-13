import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ItemService } from '../../../../providers/item.service';
import { AlertController,NavParams, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ItemDetailComponent implements OnInit {

  //public i:string = localStorage.getItem("ionic-img");
  itemss$:Observable<any>;
  item$:any

  constructor(
    private _location: Location,
    private _route: ActivatedRoute,
    private _itemService:ItemService,
    private _navParams: NavParams, 
    private _alertController: AlertController,
    private _modalController: ModalController
  ) { }

  ngOnInit() {
    const {item} = this._navParams.data;
    this.item$ = item.idimg;
    console.log(this._route.snapshot.queryParams.id);

    this.itemss$ = this._itemService.getOneItem(this.item$)
    
  }
  back(){
    this._location.back();
  }

  del(){
    console.log("delete item?");
    
    this._displayAlert("êtes vous sur de vouloir supprimer ?")
  }
  
  private async _displayAlert(message: string): Promise<HTMLIonAlertElement> {
    const alert = await this._alertController.create({
      header: 'Delete!',
      message: `Voulez-vous vraiment supprimer l'élément?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            console.log('Confirm Okay')

            this._itemService.deleteItem(this.item$)
            .toPromise()
            .then(res => {
              this.dismiss()
              //this.back()
            }) // renvoier sur la bonne page de collection et fermer la modale.
            .catch(err =>{
              console.log(err);
              // faire p-e une alerte si erreur
            })
            //this.back();
          }
        }
      ]
    });
    await alert.present();
    return  alert;
  }
  dismiss() {
    this._modalController.dismiss('item detail- closed');
  }

}
