import { Component, OnInit, Output } from '@angular/core';
import { ApiService, ICurso } from './../../services/api.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  public cursos: ICurso[];
  constructor(private Api: ApiService) { }

  ngOnInit() {
    this.GetCursos();
  }

  GetCursos(): void {
    this.Api.GetCursos().subscribe(cursos => this.cursos = cursos);
  }
}
