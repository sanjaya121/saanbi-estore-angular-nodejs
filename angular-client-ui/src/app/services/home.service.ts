import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  getProducts=()=>{
    return this.http.get("https://jsonfakery.com/products")

  }
}
