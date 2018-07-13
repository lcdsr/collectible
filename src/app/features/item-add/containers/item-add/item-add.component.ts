import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CameraPWA } from '../../../../../plugins/camera/pwa/camera-pwa.plugin';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../../../../providers/item.service';



// Instantiate custom plugin
const cameraPWA = new CameraPWA('app-item-add');


@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})


  

export class ItemAddComponent implements OnInit {


  public cameraPlugin = cameraPWA;
  public img: string;
  public inputTag: string ='';
  public arrayTag: String[] = [];

  constructor( 
    private _location: Location,    
    private _route: ActivatedRoute,
    private _itemService: ItemService,


  ) { }

  ngOnInit() {
    this.img = localStorage.getItem('ionic-img');
    

    // this.startCamera();
  }

  addTag(){
    console.log(this.inputTag);
    if(this.inputTag.length>0){
      this.arrayTag.push(this.inputTag)
      this.inputTag="";
    }
    
    //comment rendre le focus ?
  }

  removeTage(tag:string){
    console.log("item removed",tag);
    //trouvé l'item dans l'array et le suprimer 
    let index = this.arrayTag.indexOf(tag);
    if (index > -1) {
      this.arrayTag.splice(index, 1);
    }
  }

  async startCamera() {
    const pict = await cameraPWA.start();

  }

  
  addItem(){
    console.log(this._route.snapshot.queryParams.id);
    
    let data = {
      "collectionID":this._route.snapshot.queryParams.id,
      "imageUrl":localStorage.getItem("ionic-img"),//"http://www.assuropoil.fr/wp-content/uploads/assurance-chat-assurer-son-chat1.jpg", 
      "tags": this.arrayTag,
      "cords":{
        "latitiude":23.4444,
        "longitude":1.553
      }
    }
    if(this.arrayTag.length>0){
      this._itemService.insertItem(data)
      .toPromise()
      .then(res => {
        this.back();
      }) 
      .catch(err =>{
        console.log(err);
        
      })
    }
  }
  back(){
    this._location.back();
  }
}
