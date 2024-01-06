import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  providers: [TodoService],
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  todos:Todo[] = [];  
  filterText:string = "";

  constructor(private todoService:TodoService){}

  ngOnInit(): void{
    this.getTodos();
  }

  getTodos(){
    this.todoService.getPosts().subscribe((response) => {
      this.todos = response;
    })
  }

}
