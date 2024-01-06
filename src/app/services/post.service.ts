import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiUrl:string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private httpClient: HttpClient) {}

  getPostsByUser(userId:Number):Observable<Post[]>{
    return this.httpClient.get<Post[]>(this.apiUrl+"?userId="+userId);
  }

  getPosts():Observable<Post[]>{   
    return this.httpClient.get<Post[]>(this.apiUrl);
    //Burada dönüş tipini Observable yazmamın nedeni => Ana komponentin subscribe olabilmesi için
  }

}
