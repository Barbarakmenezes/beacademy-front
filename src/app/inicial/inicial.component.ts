import { Component, OnInit } from '@angular/core';

import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { AppComponent } from '../app.component';
SwiperCore.use([Pagination, Navigation]);





@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
 
  
  styleUrls: ['./inicial.component.css'], 
  

  
})
export class InicialComponent implements OnInit {
   


  constructor() { }

  ngOnInit(): void {
  }

     
   

}
