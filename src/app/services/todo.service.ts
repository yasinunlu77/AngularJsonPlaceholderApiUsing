import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl:string = "https://jsonplaceholder.typicode.com/todos";

  constructor(private httpClient: HttpClient) {}

  getPosts():Observable<Todo[]>{   
    return this.httpClient.get<Todo[]>(this.apiUrl);
  }

}
