import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { NaviComponent } from './components/navi/navi.component';
import { PostComponent } from './components/post/post.component';
import { NaviForOptionsComponent } from './components/navi-for-options/navi-for-options.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserComponent, NaviComponent, PostComponent,NaviForOptionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SecondApp';
}
