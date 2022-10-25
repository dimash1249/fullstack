import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  index(): Observable<any> {
    return this.http.get('http://127.0.0.01:8000/api/products');
  }


  indexProduct(id: any): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/products/${id}');
  }


  create(product: any): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/products/product-create', product);
  }


  edit(id: any, product: any): Observable<any> {
    return this.http.put('http://127.0.0.1:8000/api/products/edit/${id}', product);
  }


  delete(id: any): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/products/delete/${id}', id);
  }
}
