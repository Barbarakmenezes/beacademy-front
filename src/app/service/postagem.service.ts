import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Comentarios } from '../model/Comentarios';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers : new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>('https://projetobeacademy1.onrender.com/postagens', this.token)
  }

  postPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.post<Postagem>('https://projetobeacademy1.onrender.com/postagens', postagem, this.token)
  }








  postComentario(comentario: Comentarios): Observable<Comentarios>{
    return this.http.post<Comentarios>('http://localhost:8080/comentarios', comentario, this.token)
  }

  getComentario(id:number): Observable<Comentarios>{
    return this.http.get<Comentarios>('http://localhost:8080/comentarios/${id}',this.token)
  }

  deleteComentario(id: number){
    return this.http.delete('http://localhost:8080/comentarios/${id}', this.token)
  }

}
