import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos/cursos.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ComponentsModule } from '../components/components.module';

export const ROUTES: Routes = [{ path: '', component: CursosComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), ComponentsModule],
  declarations: [CursosComponent]
})
export class PaginasModule {}
