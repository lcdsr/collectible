import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GenericHttpService } from './generic.http.service';
import { HttpClient } from '@angular/common/http';

const GET_ITEM_PATH = "/items/";

@Injectable({
    providedIn: 'root'
})

export class ItemService extends GenericHttpService {

    constructor(private _http: HttpClient) {
        super(_http);
    }

    public getItem(id: string): Observable<any> {
        //id = "5b41b47857cc710af9dc5b20";
        return this.get(`${GET_ITEM_PATH}${id}`);
    }
    public getOneItem(id: string): Observable<any> {
        //id = "5b41b47857cc710af9dc5b20";
        return this.get(`${GET_ITEM_PATH}item/${id}`);
    }
    public insertItem(data: Object): Observable<any>  {
        return this.post(`${GET_ITEM_PATH}`,false,data);
    }
    public deleteItem(id: string): Observable<any>{
        return this.delete(`${GET_ITEM_PATH}${id}`,false);
    }
}