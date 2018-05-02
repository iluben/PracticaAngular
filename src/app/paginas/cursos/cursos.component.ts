import { Component, OnInit, Output, Input } from '@angular/core';
import { ApiService, ICurso } from './../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  @Input() inDataToDeleteCourse;
  public cursos: ICurso[];
  constructor(
    private Api: ApiService,
    private route: Router) { }

  ngOnInit() {
    this.GetCursos();
  }

  // GetCursos(): void {
  //   this.Api.GetCursos().subscribe(cursos => this.cursos = cursos);
  // }
  GetCursos(): void {
    this.Api.GetCursos().subscribe(data => this.cursos = data);
  }

  borrarCurso(id): void {
    this.Api.DeleteCursos(id).subscribe(data => console.log('delete', data));
  }

  verCurso(id): void {
    // console.log('idVerCursoscomponente', id);
    this.route.navigate(['cursos/ver', id], {skipLocationChange: true});
  }
}
