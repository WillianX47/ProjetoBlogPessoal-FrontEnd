import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css'],
})
export class EntrarComponent implements OnInit {
  userLogin: UserLogin = new UserLogin();

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  entrar() {
    this.auth.entrar(this.userLogin).subscribe(
      (resp: UserLogin) => {
        this.userLogin = resp;
        environment.id = this.userLogin.id;
        environment.token = this.userLogin.token;
        environment.nome = this.userLogin.nome;
        environment.usuario = this.userLogin.usuario;
        environment.tipo = this.userLogin.tipo;
        environment.foto = this.userLogin.foto;

        this.router.navigate(['/inicio']);
      },
      (erro) => {
        if (erro.status == 400) {
          alert('Usuario ou senha incorretos');
        }
      }
    );
  }
}
