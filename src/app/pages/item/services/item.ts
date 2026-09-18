import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../interfaces/item';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class ItemService {
  //private itemService = inject(ItemService);
  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  private http = inject(HttpClient);
  // url: string = 'https://api.restful-api.dev/objects';
  private url = environment.API;

  constructor() {}

  /*
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url);
  }*/

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.url}/objects`);
  }


  // * Metodos
  postItem(item: Omit<Item, 'id'>): Observable<Item> {
    // Usamos JSON.stringify para forzar el formato del cuerpo
    return this.http.post<Item>(
      this.url,
      JSON.stringify(item),
      this.httpOptions
    );
  }

  deleteItem(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  patchItem(id: string, item: Partial<Item>): Observable<Item> {
    return this.http.patch<Item>(`${this.url}/${id}`, item, this.httpOptions);
  }
}
