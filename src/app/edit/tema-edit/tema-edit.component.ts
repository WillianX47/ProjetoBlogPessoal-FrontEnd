import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tema-edit',
  templateUrl: './tema-edit.component.html',
  styleUrls: ['./tema-edit.component.css'],
})
export class TemaEditComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    window.scroll(0, 0);
  }

  

}
