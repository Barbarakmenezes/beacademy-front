import { Component, OnInit } from '@angular/core';


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
  control = document.querySelectorAll('.control');
  currentitem=0;
  item = document.querySelectorAll('item');
   maxItems = this.item.length;



slidedireita(){
  
}

slideesquerda(){}

 
}
