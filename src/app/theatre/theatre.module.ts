import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheatreComponent } from './theatre/theatre.component';
import { TheatreRoutingModule } from './theatre-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [TheatreComponent],
  imports: [CommonModule, TheatreRoutingModule, ReactiveFormsModule],
})
export class TheatreModule {}
