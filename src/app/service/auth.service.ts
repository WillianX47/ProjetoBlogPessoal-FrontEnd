import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }

  getByIdUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(
      `https://willsblog.herokuapp.com/api/v1/usuario/${id}`,
      this.token
    );
  }

  entrar(userlogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>(
      'https://willsblog.herokuapp.com/api/v1/usuario/logar',
      userlogin
    );
  }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(
      'https://willsblog.herokuapp.com/api/v1/usuario/cadastrar',
      usuario
    );
  }

  putUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(
      'https://willsblog.herokuapp.com/api/v1/usuario/atualizar',
      usuario,
      this.token
    );
  }

  logado() {
    let ok: boolean = false;

    if (environment.token != '') {
      ok = true;
    }
    return ok;
  }
}
