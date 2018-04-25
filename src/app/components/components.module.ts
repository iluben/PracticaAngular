import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MenuComponent, CardComponent],
  exports: [MenuComponent, CardComponent]
})
export class ComponentsModule {}
