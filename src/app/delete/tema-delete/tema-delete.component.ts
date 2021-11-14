import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from 'src/app/model/Tema';
import { TemaService } from 'src/app/service/tema.service';

@Component({
  selector: 'app-tema-delete',
  templateUrl: './tema-delete.component.html',
  styleUrls: ['./tema-delete.component.css'],
})
export class TemaDeleteComponent implements OnInit {
  tema: Tema = new Tema();

  constructor(
    private router: Router,
    private temaService: TemaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    window.scroll(0, 0);
    this.temaService.refreshToken();

    let idTema = this.route.snapshot.params['id'];
    this.findByIdTema(idTema);
  }

  findByIdTema(id: number) {
    this.temaService
      .getByIdTema(id)
      .subscribe((resp: Tema) => (this.tema = resp));
  }

  deleteTema() {
    this.temaService.deleteTema(this.tema.id).subscribe(() => {
      alert('Tema deletado com sucesso!');
      this.router.navigate(['/tema']);
    });
  }
}
