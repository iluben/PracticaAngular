import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG, END_POINT } from './../app.constant';
import { Observable } from 'rxjs/Observable';

export interface ICurso {
  id: string;
  name: string;
  descripcion: string;
  horas: number;
  plazas_disponibles: number;
  precio: number;
  max_alumnos: number;
}

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  // public get value(): Observable<object> {
  //   return this.http.get(Constant.API_ENDPOINT);
  // }

  GetCursos(): Observable<ICurso[]> {
    return this.http.get<ICurso[]>(
      CONFIG.ApiUrl.toString()
      + END_POINT.Cursos.toString());
  }

  PostCursos(form): Observable<ICurso> {
    return this.http.post<any>(CONFIG.ApiUrl.toString()
    + END_POINT.Cursos.toString(), form);
  }
}
