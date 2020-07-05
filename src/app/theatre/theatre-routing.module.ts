import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TheatreComponent } from './theatre/theatre.component';

const routes: Routes = [
  {path: 'theatre/add', pathMatch: 'full', component: TheatreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class TheatreRoutingModule { }
