import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'beacademy-front';

  config: SwiperOptions = {
    pagination: { 
      el: '.swiper-pagination', 
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  };  
   
}



