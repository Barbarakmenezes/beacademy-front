import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from 'src/app/model/Postagem';
import { Usuario } from 'src/app/model/usuario';
import { AuthService } from 'src/app/service/auth.service';
import { PostagemService } from 'src/app/service/postagem.service';

import { environment } from 'src/environments/environment.prod';




@Component({
  selector: 'app-postagem-edit',
  templateUrl: './postagem-edit.component.html',
  styleUrls: ['./postagem-edit.component.css']
})
export class PostagemEditComponent implements OnInit {
  postagem: Postagem = new Postagem ()
  usuario: Usuario = new Usuario()
  idUsuario = environment.id
  listaPostagem: Postagem[]

  

  nome = environment.nome
     foto = environment.foto
     id = environment.id
   
     
key= 'data'
reverse = true


  constructor(private router : Router,
    private postagemService: PostagemService,
    private authService: AuthService,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  findByIdUser() {
    this.authService.getByIdUser(this.idUsuario).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }




}
