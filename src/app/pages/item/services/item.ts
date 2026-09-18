import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../interfaces/item';

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
  API_URL: string = 'https://api.restful-api.dev/objects';

  constructor() {}

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.API_URL);
  }


  // * Metodos
  postItem(item: Omit<Item, 'id'>): Observable<Item> {
    // Usamos JSON.stringify para forzar el formato del cuerpo
    return this.http.post<Item>(
      this.API_URL,
      JSON.stringify(item),
      this.httpOptions
    );
  }

  deleteItem(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }

  patchItem(id: string, item: Partial<Item>): Observable<Item> {
    return this.http.patch<Item>(`${this.API_URL}/${id}`, item, this.httpOptions);
  }
}
