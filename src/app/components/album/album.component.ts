import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Album } from '../../models/album';
import { HttpClientModule } from '@angular/common/http';
import { AlbumService } from '../../services/album.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  providers: [AlbumService],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent implements OnInit{

  albums:Album[] = [];
  filterText:string = "";

  constructor(private albumService:AlbumService) {}

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(){
    this.albumService.getAlbums().subscribe((response)=>{
      this.albums = response;
    })
  }






}
