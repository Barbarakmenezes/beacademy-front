import { Comentarios } from "./Comentarios"
import { Usuario } from "./usuario"

export class Postagem {
    public id: number
    public titulo: string
    public texto: string 
    public foto: string
    public date: Date 
    public usuario: Usuario
    public comentarios: Comentarios []
    
}