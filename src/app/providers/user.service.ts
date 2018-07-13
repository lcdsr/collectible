import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GenericHttpService } from './generic.http.service';
import { HttpClient } from '@angular/common/http';

const GET_USER_PATH = "/users/";

@Injectable({
    providedIn: 'root'
})

export class UserService extends GenericHttpService {

    constructor(private _http: HttpClient) {
        super(_http);
    }

    public getItemUser(id: string): Observable<any> {
        id = localStorage.getItem("userID");
        return this.get(`${GET_USER_PATH}${id}`);
    }

    public insertItemUser(id: string,data: Object): Observable<any>  {
        return this.post(`${GET_USER_PATH}`,false,data);
    }
}