import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  apiUrl:string = "https://jsonplaceholder.typicode.com/comments";

  constructor(private httpClient: HttpClient) {}

  getCommentsByPost(postId:Number):Observable<Comment[]>{
    return this.httpClient.get<Comment[]>(this.apiUrl+"?postId="+postId);
  }

  getComments():Observable<Comment[]>{   
    return this.httpClient.get<Comment[]>(this.apiUrl);
    //Burada dönüş tipini Observable yazmamın nedeni => Ana komponentin subscribe olabilmesi için
  }
  
}
