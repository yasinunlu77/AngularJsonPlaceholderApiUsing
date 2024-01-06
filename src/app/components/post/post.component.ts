import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';
import { FilterPipePipe } from '../../pipes/filter-pipe.pipe';

@Component({
    selector: 'app-post',
    standalone: true,
    templateUrl: './post.component.html',
    styleUrl: './post.component.css',
    providers: [PostService],
    imports: [HttpClientModule, CommonModule, FormsModule, FilterPipePipe]
})
export class PostComponent implements OnInit{

  posts:Post[] = [];  
  filterText:string = "";

  constructor(private postService:PostService, private ActivatedRoute:ActivatedRoute){}

  ngOnInit(): void{
    this.ActivatedRoute.params.subscribe((params)=>{
      if(params["userId"]){
        this.getPostsByUser(params["userId"]);
      }
      else{
        this.getPosts();
      }
    })
  }

  getPostsByUser(userId:Number){
    this.postService.getPostsByUser(userId).subscribe((response) => {
      this.posts = response;
    })
  }

  getPosts(){
    this.postService.getPosts().subscribe((response) => {
      this.posts = response;
    })
  }

}
