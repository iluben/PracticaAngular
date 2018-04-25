import { Component, Input } from '@angular/core';
import { ICurso } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @Input() cursos: ICurso;
  title = 'app';
}
