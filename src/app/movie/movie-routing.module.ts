import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { ShowsListingComponent } from './movie/shows-listing/shows-listing.component';
import { DetailsComponent } from './movie/details/details.component';
import { AddComponent } from './movie/add/add.component';

const routes: Routes = [
  {
    path: 'movie',
    component: MovieComponent,
    children: [
      { path: 'add',  component: AddComponent },
      { path: ':id',  component: DetailsComponent },
      {
        path: ':id/shows',
        component: ShowsListingComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class MovieRoutingModule {}
