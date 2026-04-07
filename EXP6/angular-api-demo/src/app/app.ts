import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ItemsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'angular-api-demo';
}