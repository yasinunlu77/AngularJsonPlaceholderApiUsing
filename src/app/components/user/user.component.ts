import { Component } from '@angular/core';
import { User } from '../../models/user';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterLink, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  providers: [UserService]
})
export class UserComponent {
  
  users:User[] = [];  
  currentUser:User;

  constructor(private userService:UserService){}

  ngOnInit(): void{
    this.getPosts();
  }

  getPosts(){
      this.userService.getPosts().subscribe((response) => {
        this.users = response;
      });
  }

  setCurrentUserPosts(user:User){
    this.currentUser = user;
  }

  getCurrentUserClass(user: User) {
    if(this.currentUser == user){
      return "list-group-item list-group-item-action list-group-item-action list-group-item-dark actice"
    }
    else{
      return "list-group-item list-group-item-action list-group-item-action list-group-item-dark"
    }
  }

}
