import { Tema } from "./Tema";
import { Usuario } from "./Usuario";

export class Postagem{
    public id: number;
    public textoPostagem: string;
    public criador: Usuario;
    public dataPostagem: Date;
    public temaPostagem: Tema;
    public tituloPostagem: String;
}