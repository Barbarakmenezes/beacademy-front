import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

 
     nome = environment.nome
     foto = environment.foto
     id = environment.id
   

  constructor(
    private router : Router

    
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    if (environment.token == ''){
      alert('Sua sessão expirou, faça login novamente!')
      this.router.navigate(['/login'])

    }
  }


  sair (){
    this.router.navigate(['/inicial'])
    environment.token = ''
    environment.nome = ''
    environment.foto= ''
    environment.id= 0
  }

}
