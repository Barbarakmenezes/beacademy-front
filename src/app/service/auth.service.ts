import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';
import { environment } from 'src/environments/environment';
import { UsuarioLogin } from '../model/usuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }



 
entrar (usuarioLogin : UsuarioLogin) : Observable <UsuarioLogin>{
  return this.http.post<UsuarioLogin>( "https://projetobeacademy1.onrender.com/usuarios/logar" , usuarioLogin)
}



cadastrar (usuario:Usuario) : Observable <Usuario>{
  return this.http.post<Usuario>( "https://projetobeacademy1.onrender.com/usuarios/cadastrar", usuario)
}


getByIdUser(id: number): Observable<Usuario>{
  return this.http.get<Usuario>( "https://projetobeacademy1.onrender.com/usuarios/${id}")
}



}
