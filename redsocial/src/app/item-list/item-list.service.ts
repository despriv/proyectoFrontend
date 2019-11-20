// import {ITEMS} from './mocks';
import { Item } from './item.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Observable } from 'rxjs';

const URL_BASE = 'http://localhost:3000/item-list';

//POST, PUT
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable()
export class ItemListService {
    constructor(private http: HttpClient) { }

    //GET
    getItemList() {
        return this.http.get(URL_BASE);
    }
    getItemById(nombre: string) {
        return this.http.get(`${URL_BASE}/${nombre}`);
    }

    //POST
    addItem(item: Item): Observable<Item> {
        return this.http.post<Item>(URL_BASE, item, httpOptions);
    }

    //PUT
    updateItem(item: Item): Observable<Item> {
        const url = `${URL_BASE}/${item.nombre}`;
        return this.http.put<Item>(url, item, httpOptions);
    }
}