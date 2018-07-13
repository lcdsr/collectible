import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GenericHttpService } from './generic.http.service';
import { HttpClient } from '@angular/common/http';

const GET_COLLECTION_PATH = "/collections/";

@Injectable({
    providedIn: 'root'
})

export class CollectionService extends GenericHttpService {

    constructor(private _http: HttpClient) {
        super(_http);
    }

    public getItemCollection(id: string): Observable<any> {
        //id = "5b39fa4961d86240ff58168a";
        return this.get(`${GET_COLLECTION_PATH}${id}`);
    }

    public insertItemCollection(id: string,data: Object): Observable<any>  {
        return this.post(`${GET_COLLECTION_PATH}`,false,data);
    }
}