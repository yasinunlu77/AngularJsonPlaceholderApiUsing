import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navi-for-options',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navi-for-options.component.html',
  styleUrl: './navi-for-options.component.css'
})
export class NaviForOptionsComponent{

  constructor() {
  }

}
