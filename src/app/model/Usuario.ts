import { Postagem } from "./Postagem";

export class Usuario{
    public id: number;
    public usuario: string;
    public nome: string;
    public senha: string;
    public foto: string;
    public tipo: string;
    public minhasPostagens: Postagem[];
}