import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { Photo } from '../../models/photo';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css',
  providers: [PhotoService]
})
export class PhotoComponent implements OnInit {

  photos:Photo[] = [];

  constructor(private photoService:PhotoService,
    private ActivatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe((params)=>{
      if(params["albumId"]){
        this.getPhotosByAlbum(params["albumId"]);
      }
      else{
        this.getPhotos();
      }
    })
  }

  getPhotosByAlbum(userId:Number){
    this.photoService.getPhotosByAlbum(userId).subscribe((response) => {
      this.photos = response;
    })
  }

  getPhotos(){
    this.photoService.getPhotos().subscribe((response) => {
      this.photos = response;
    })
  }


}
