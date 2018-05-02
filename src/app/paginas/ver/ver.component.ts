import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService, ICurso } from './../../services/api.service';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent implements OnInit {

  public curso: ICurso;
  public id: string;
  constructor(private nav: ActivatedRoute, private API: ApiService ) {
    // this.nav.params.subscribe(params => console.log('id paso del parametro con ActivatedRoute', params['id'])),
    this.nav.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit() {
    this.GetInfo(this.id);
  }

  GetInfo(id) {
    this.API.GetCurso(id).subscribe(response => this.curso = response );
  }

  onSubmit(formulario) {
    console.log(formulario.form.value);
    this.API.PostCursos(formulario.form.value).subscribe(
      response => console.log(JSON.stringify(response)),
      error => console.log(JSON.stringify(error))
    );
  }
}
