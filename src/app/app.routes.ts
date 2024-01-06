import { Routes } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { AlbumComponent } from './components/album/album.component';
import { TodoComponent } from './components/todo/todo.component';

export const routes: Routes = [
    {path:"",component:PostComponent},
    {path:"post",component:PostComponent},
    {path:"post/user/:userId",component:PostComponent},
    {path:"album",component:AlbumComponent},
    {path:"todo",component:TodoComponent},
];
