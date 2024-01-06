import { Routes } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { AlbumComponent } from './components/album/album.component';
import { TodoComponent } from './components/todo/todo.component';
import { CommentComponent } from './components/comment/comment.component';
import { PhotoComponent } from './components/photo/photo.component';

export const routes: Routes = [
    {path:"",component:PostComponent},
    {path:"post",component:PostComponent},
    {path:"post/user/:userId",component:PostComponent},
    {path:"album",component:AlbumComponent},
    {path:"todo",component:TodoComponent},
    {path:"comment/post/:postId",component:CommentComponent},
    {path:"photo/album/:albumId",component:PhotoComponent},
];
