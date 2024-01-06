import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  apiUrl:string = "https://jsonplaceholder.typicode.com/photos";

  constructor(private httpClient: HttpClient) {}

  getPhotosByAlbum(albumId:Number):Observable<Photo[]>{
    return this.httpClient.get<Photo[]>(this.apiUrl+"?albumId="+albumId);
  }

  getPhotos():Observable<Photo[]>{   
    return this.httpClient.get<Photo[]>(this.apiUrl);
    //Burada dönüş tipini Observable yazmamın nedeni => Ana komponentin subscribe olabilmesi için
  }

}
