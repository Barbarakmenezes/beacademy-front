import { Postagem } from "./Postagem"
import { Usuario } from "./usuario"

export class Comentarios {
public id: number 
public nome: string
public postagem: Postagem
public descricao: string
public texto: string
public foto: string
public usuario: Usuario
}