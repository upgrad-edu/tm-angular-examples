import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheatreComponent } from './theatre/theatre.component';
import { TheatreRoutingModule } from './theatre-routing.module';

@NgModule({
  declarations: [TheatreComponent],
  imports: [CommonModule, TheatreRoutingModule],
})
export class TheatreModule {}
