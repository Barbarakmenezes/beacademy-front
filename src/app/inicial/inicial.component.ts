import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppComponent } from '../app.component';
import { Observable } from 'rxjs';
import { ScrollbarEvents } from 'swiper/types';








@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
 
  
  styleUrls: ['./inicial.component.css'], 
  

  
})
export class InicialComponent implements OnInit {
  mainListDiv = document.getElementById('.links');
   mediaButton = document.getElementById('hamburguer');
 

  constructor(
    
  ) { }

  ngOnInit(){
 window.scroll(0,0);
 
   
  }


  enviarFormulario() {
    let email : string = (<HTMLInputElement>document.getElementById("email")).value;
    let nome : string = (<HTMLInputElement>document.getElementById("nome")).value;
    let message : string = (<HTMLInputElement>document.getElementById("message")).value;
  
  
  if (email == ""){
   alert('Preencha todos os campos');
  } else if (nome == "") {
   alert('Preencha o campo de nome');
  }else if (message == "") {
    alert('Preencha todos os campos');
  } else if (email != "" && nome != "" ){
   alert('Enviado com sucesso!');
  }
  
  
  }





  }



    
  




 
    
   
  


  

  

 
  

  

   


  
  
 



