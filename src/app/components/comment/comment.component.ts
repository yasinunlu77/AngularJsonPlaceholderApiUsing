import { Component } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css',
  providers: [CommentService]
})
export class CommentComponent {
  comments : Comment[] = [];

  constructor(private photoService:CommentService,
    private ActivatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe((params)=>{
      if(params["albumId"]){
        this.getCommentsByPost(params["albumId"]);
      }
      else{
        this.getPhotos();
      }
    })
  }

  getCommentsByPost(userId:Number){
    this.photoService.getCommentsByPost(userId).subscribe((response) => {
      this.comments = response;
    })
  }

  getPhotos(){
    this.photoService.getComments().subscribe((response) => {
      this.comments = response;
    })
  }
}
