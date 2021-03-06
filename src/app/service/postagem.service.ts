import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root',
})
export class PostagemService {
  constructor(private http: HttpClient) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }

  getByIdPostagem(id: number): Observable<Postagem> {
    return this.http.get<Postagem>(
      `https://willsblog.herokuapp.com/api/v1/postagem/${id}`,
      this.token
    );
  }

  getAllPostagem(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>(
      'https://willsblog.herokuapp.com/api/v1/postagem',
      this.token
    );
  }

  postPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.post<Postagem>(
      'https://willsblog.herokuapp.com/api/v1/postagem/novaPostagem',
      postagem,
      this.token
    );
  }

  putPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.put<Postagem>(
      'https://willsblog.herokuapp.com/api/v1/postagem/atualizarPostagem',
      postagem,
      this.token
    );
  }

  deletePostagem(id: number): Observable<Postagem> {
    return this.http.delete<Postagem>(
      `https://willsblog.herokuapp.com/api/v1/postagem/deletarPostagem/${id}`,
      this.token
    );
  }
}
