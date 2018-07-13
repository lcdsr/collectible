import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ItemService } from '../../../../providers/item.service';
import { Observable } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import { ItemDetailComponent } from '../../../item-detail/containers/item-detail/item-detail.component';


@Component({
  selector: 'app-collection-detail',
  templateUrl: './collection-detail.component.html',
  styleUrls: ['./collection-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CollectionDetailComponent implements OnInit {

  showList: boolean = false;
  searchQuery: string = '';
  // items: string[];
  public id= this._route.snapshot.queryParams.id
  item$:Observable<any>;

  constructor(
    private _router: Router,  
    private _location: Location ,
    private _itemService:ItemService,    
    private _route: ActivatedRoute,
    private _modalController: ModalController
  ) {}

  ngOnInit() {
    console.log(this._route.snapshot.queryParams.id);
    this.item$ = this._itemService.getItem(this.id)
  }
  back(){
    //this._router.navigate([{}]);
    //this._router.navigateByUrl('');
    this._location.back();
  }
  addItem(){
    this._router.navigate(['/itemAdd'], { queryParams: { id: this.id }});    
  }
  goItem(imgId:string){
    //this._router.navigate(['/itemDetail'], { queryParams: { id: imgId } });  
    //call to a modal =>
    this.goItemDetail(imgId)
  }

  async goItemDetail(imgId:string) {
    const modal = await this._modalController.create({
      component: ItemDetailComponent,
      componentProps: {  
        item : {
          idimg:imgId
        }
      }
    });    
    modal.onDidDismiss(data => {
      let id= this._route.snapshot.queryParams.id
      this.item$ = this._itemService.getItem(id)
    });
    // open modal
    return await modal.present();
  }

  displayDismissData(data) {
    console.log('Modal closing...', data);
  }
  

  dismiss() {
    this._modalController.dismiss('item detail - closed');
  }

    getItems(ev: any) {  
      const val = ev.target.value;
      this.item$ = this._itemService.getItem(this.id)
      .pipe(
        map(items => {
          if (val && val.trim() != '') {
            return items.filter((item: {tags: string[]}) => {
              console.log((item.tags.indexOf(val.toLowerCase()) > -1));
              return item.tags.indexOf(val.toLowerCase()) > -1
            })
          }
          return items
        })
      )
    }
}
