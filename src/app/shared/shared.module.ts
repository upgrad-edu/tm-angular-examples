import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { DurationPipe } from './pipe/duration.pipe';

@NgModule({
  declarations: [CardComponent, DurationPipe],
  imports: [CommonModule],
  exports: [CardComponent, DurationPipe],
})
export class SharedModule {}
