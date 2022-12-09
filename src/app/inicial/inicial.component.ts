import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


import { AppComponent } from '../app.component';








@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
 
  
  styleUrls: ['./inicial.component.css'], 
  

  
})
export class InicialComponent implements OnInit {
    
  

  constructor() { }

  ngOnInit(): void {
 window.scroll(0,0)
 
  }
  controls = document.querySelectorAll('.control');
  currentitem=0;
  items = document.querySelectorAll('item');
   maxItems = this.items.length;



   


   

 
}
