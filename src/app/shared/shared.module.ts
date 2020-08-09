import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { DurationPipe } from './pipe/duration.pipe';
import { TheatreNamePipe } from './pipe/theatre-name.pipe';

@NgModule({
  declarations: [CardComponent, DurationPipe, TheatreNamePipe],
  imports: [CommonModule],
  exports: [CardComponent, DurationPipe, TheatreNamePipe],
})
export class SharedModule { }
