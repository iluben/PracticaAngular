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
  @Output() viewCourse = new EventEmitter();
  @Output() DeleteCourse = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  deleteOnClick(id) {
    // console.log('id', id);
    // console.log('id', this.inputData.id);
    this.DeleteCourse.emit(id);
  }

  viewClick(id) {
    console.log('id', id);
    this.viewCourse.emit(id);
  }
}
