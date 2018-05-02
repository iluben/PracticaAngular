import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ICurso } from './../../services/api.service';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  public curso: ICurso;
  constructor(private API: ApiService ) { }

  ngOnInit() {
  }

  onSubmit(formulario) {
    console.log(formulario.form.value);
    this.API.PostCursos(formulario.form.value).subscribe(
      response => console.log(JSON.stringify(response)),
      error => console.log(JSON.stringify(error))
    );
  }
}
