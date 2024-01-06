import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  apiUrl:string = "https://jsonplaceholder.typicode.com/users"

  constructor(private httpClient:HttpClient) { }

  getUsers():Observable<User[]>{   
    return this.httpClient.get<User[]>(this.apiUrl);
    //Burada dönüş tipini Observable yazmamın nedeni => Ana komponentin subscribe olabilmesi için
  }

}
