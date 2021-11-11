import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root',
})
export class TemaService {
  constructor(private http: HttpClient) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }

  getAllTema(): Observable<Tema[]> {
    return this.http.get<Tema[]>(
      'https://willsblog.herokuapp.com/api/v1/tema',
      this.token
    );
  }

  getByIdTema(id: number): Observable<Tema> {
    return this.http.get<Tema>(
      `https://willsblog.herokuapp.com/api/v1/tema/${id}`,
      this.token
    );
  }

  putTema(tema: Tema, id: number): Observable<Tema> {
    return this.http.put<Tema>(
      `https://willsblog.herokuapp.com/api/v1/tema/atualizar/${id}`,
      tema,
      this.token
    );
  }

  postTema(tema: Tema): Observable<Tema> {
    return this.http.post<Tema>(
      'https://willsblog.herokuapp.com/api/v1/tema/criar',
      tema,
      this.token
    );
  }

  deleteTema(id: number) {
    return this.http.delete<Tema>(
      `https://willsblog.herokuapp.com/api/v1/tema/${id}`,
      this.token
    );
  }
}
