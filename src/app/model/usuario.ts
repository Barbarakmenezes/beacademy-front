import { Postagem } from "./Postagem"
import { Comentarios } from "./Comentarios"

export class Usuario{
 
    public id: number
    public nome: string
    public usuario: string
    public senha: string
    public foto: string
   
    public postagem: Postagem[]
    public comentarios: Comentarios[]
}