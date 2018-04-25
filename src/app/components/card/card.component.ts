import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ApiService, ICurso } from './../../services/api.service';
import { Observable } from 'rxjs/Observable';
import { CursosComponent } from '../../paginas/cursos/cursos.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  @Input() inputData: ICurso;
  // @Output() outData = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
}
