import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { ShowsListingComponent } from './movie/shows-listing/shows-listing.component';
import { DetailsComponent } from './movie/details/details.component';
import { AddComponent } from './movie/add/add.component';
import { AuthGuardService } from '../core/services/auth-guard.service';
import { BookComponent } from './movie/book/book.component';
const routes: Routes = [
  {
    path: 'movie',
    component: MovieComponent,
    children: [
      { path: 'edit/:movieId',  component: AddComponent, canActivate: [AuthGuardService] },
      { path: 'book/:movieId',  component: BookComponent, canActivate: [AuthGuardService] },
      { path: 'add',  component: AddComponent, canActivate: [AuthGuardService] },
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
