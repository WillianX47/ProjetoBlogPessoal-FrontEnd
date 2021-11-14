import { HttpHeaders } from '@angular/common/http';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Tema } from 'src/app/model/Tema';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  usuario: Usuario = new Usuario();
  usuarioId = environment.id;
  confirmarSenha: string;
  tipoUsuario: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);

    if (environment.token == '') {
      this.router.navigate(['/entrar']);
    }
    this.refreshToken();
  }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value;
  }

  tipoUser(event: any) {
    this.tipoUsuario = event.target.value;
  }

  atualizar() {
    this.usuario.id = this.usuarioId;
    this.usuario.tipo = this.tipoUsuario;
    if (this.usuario.senha != this.confirmarSenha) {
      alert('As senhas estão diferentes');
    } else {
      this.authService.putUsuario(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp;
        alert('Usuario atualizado');
        environment.id = 0;
        environment.nome = '';
        environment.tipo = '';
        environment.token = '';
        environment.usuario = '';
        environment.foto = '';
        this.router.navigate(['/entrar']);
      });
    }
  }
}
