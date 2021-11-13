import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from 'src/app/model/Postagem';
import { PostagemService } from 'src/app/service/postagem.service';

@Component({
  selector: 'app-postagem-delete',
  templateUrl: './postagem-delete.component.html',
  styleUrls: ['./postagem-delete.component.css'],
})
export class PostagemDeleteComponent implements OnInit {
  postagem: Postagem = new Postagem();

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    window.scroll(0, 0);
    this.postagemService.refreshToken();

    let idPostagem = this.route.snapshot.params['id'];
    this.findByIdPostagem(idPostagem);
  }

  findByIdPostagem(id: number) {
    this.postagemService
      .getByIdPostagem(id)
      .subscribe((resp: Postagem) => (this.postagem = resp));
  }

  deletePostagem(){
    this.postagemService.deletePostagem(this.postagem.id).subscribe(()=>{
      alert("Postagem deletada com sucesso!")
      this.router.navigate(["/inicio"])
    })
  }
}
