import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; 
import { ApiService } from '../api'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-items',
  templateUrl: './items.html',
  styleUrl: './items.css',
  imports: [CommonModule]
})
export class ItemsComponent implements OnInit {
  items: any[] = []; 

  // 1. We inject ChangeDetectorRef here in the constructor
  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef) {}

  async ngOnInit(): Promise<void> {
    console.log("1. Starting to fetch data...");
    
    try {
      this.items = await this.apiService.getItems();
      this.items = this.items.slice(0, 10); 
      console.log("2. Data successfully received:", this.items);
      
      // 2. We tell Angular to update the screen with the new data!
      this.cdr.detectChanges(); 
      
    } catch (error) {
      console.error("2. Error fetching data:", error);
    }
  }
}