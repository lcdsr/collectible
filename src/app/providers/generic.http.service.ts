import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const API_END_POINT = "https://collectible-server.herokuapp.com/api"; // http://localhost:3000/api "http://192.168.3.28:3000/api" mettre l'adresse ip de la machine ou du wifi si pas internet

@Injectable({
    providedIn: 'root'
})

export class GenericHttpService {

    constructor(private _httpClient: HttpClient) { }

    get(path: string = null, useAuth: boolean = false): Observable<any> {
        if (!path) {
            return of(new Error('API Endpoint do not exist.'));
        }

        let headers: HttpHeaders =  new HttpHeaders();

        if (useAuth)
            headers.append("Authorization", "Basic " + localStorage.getItem("user"));

        return this._httpClient.get(`${API_END_POINT}${path}`, { headers: headers }).pipe(
            map(res => res || {}),
            catchError((err: Error) => of(new Error(`${err.message || `Unable to request service API.`}`)))
        );
    }
    post(path: string = null, useAuth: boolean = false, body= {}): Observable<any> {
        
        if (!path) {
            return of(new Error('API Endpoint do not exist.'));
        }

        let headers: HttpHeaders =  new HttpHeaders();

        if (useAuth)
            headers.append("Authorization", "Basic " + localStorage.getItem("user"));

        console.log(`${API_END_POINT}${path}`,body);
        
        return this._httpClient.post(`${API_END_POINT}${path}`, body, { headers: headers }).pipe(
            map(res => res || {}),
            catchError((err: Error) => of(new Error(`${err.message || `Unable to request service API.`}`)))
        );
    }
    delete(path: string = null, useAuth: boolean = false): Observable<any> {
        
        if (!path) {
            return of(new Error('API Endpoint do not exist.'));
        }

        let headers: HttpHeaders =  new HttpHeaders();

        if (useAuth)
            headers.append("Authorization", "Basic " + localStorage.getItem("user"));

        console.log(`${API_END_POINT}${path}`);
        
        return this._httpClient.delete(`${API_END_POINT}${path}`, { headers: headers }).pipe(
            map(res => res || {}),
            catchError((err: Error) => of(new Error(`${err.message || `Unable to request service API.`}`)))
        );
    }
}