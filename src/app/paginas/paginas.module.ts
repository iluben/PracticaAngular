import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos/cursos.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ComponentsModule } from '../components/components.module';
import { NuevoComponent } from './nuevo/nuevo.component';
import { FormsModule } from '@angular/forms';

export const ROUTES: Routes = [
  { path: '', component: CursosComponent },
  { path: 'nuevo', component: NuevoComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    ComponentsModule,
    FormsModule
  ],
  declarations: [
    CursosComponent,
    NuevoComponent]
})
export class PaginasModule {}
