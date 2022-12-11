import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { environment } from 'src/environments/environment.prod';
import { Comentarios } from '../model/Comentarios';
import { Postagem } from '../model/Postagem';
import { Usuario } from '../model/usuario';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
postagem: Postagem = new Postagem ()
usuario: Usuario = new Usuario()
idUsuario = environment.id
listaPostagem: Postagem[]

key= 'data'
reverse = true

comentario: Comentarios = new Comentarios()



comentarioTexto: string

comentariolocal: string
 
     nome = environment.nome
     foto = environment.foto
     id = environment.id
   

  constructor(
    private router : Router,
    private postagemService: PostagemService,
    private authService: AuthService,
    private route: ActivatedRoute

    
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    if (environment.token == ''){
      alert('Sua sessão expirou, faça login novamente!')
      this.router.navigate(['/login'])

    }

    this.getAllPostagens()
  }


  sair (){
    this.router.navigate(['/inicial'])
    environment.token = ''
    environment.nome = ''
    environment.foto= ''
    environment.id= 0
  }


  publicar () {

   this.usuario.id = this.idUsuario
   this.postagem.usuario = this.usuario

   this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem)=>
   this.postagem = resp)
   alert('Postagem realizada com sucesso!')
   this.postagem = new Postagem ()

  }

  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[])=>{
      this.listaPostagem= resp
    })
  }
  findByIdUser() {
    this.authService.getByIdUser(this.idUsuario).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }



  enviarComentario(id:number,comentario:string) {
    this.comentario = new Comentarios()
    this.comentario.usuario = new Usuario()
    this.comentario.usuario.id = environment.id
    this.comentario.postagem = new Postagem()
    this.comentario.postagem.id = id
    this.comentario.texto = comentario.trim();
    this.comentario.nome = environment.nome 

    
    this.postagemService.postComentario(this.comentario).subscribe(() => {
      this.getAllPostagens()
    });    
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      console.log(resp[0])
    });
  }



}
