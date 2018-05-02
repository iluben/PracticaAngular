import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos/cursos.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ComponentsModule } from '../components/components.module';
import { NuevoComponent } from './nuevo/nuevo.component';
import { FormsModule } from '@angular/forms';
import { VerComponent } from './ver/ver.component';

export const ROUTES: Routes = [
  { path: '', component: CursosComponent },
  { path: 'nuevo', component: NuevoComponent },
  { path: 'ver/:id', component: VerComponent }
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
    NuevoComponent,
    VerComponent]
})
export class PaginasModule {}
