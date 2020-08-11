import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { ShowsListingComponent } from './movie/shows-listing/shows-listing.component';
import { DetailsComponent } from './movie/details/details.component';
import { AddComponent } from './movie/add/add.component';
import { BookComponent } from './movie/book/book.component';
import { SearchComponent } from './movie/search/search.component';
import { AuthGuardGuard } from '../core/services/auth-guard.guard';

const routes: Routes = [
  {
    path: 'movie',
    component: MovieComponent,
    children: [
      {
        path: 'edit/:movieId',
        component: AddComponent,
        canActivate: [AuthGuardGuard]
      },
      {
        path: 'book',
        component: BookComponent,
        canActivate: [AuthGuardGuard]
      },
      { path: 'add', component: AddComponent, canActivate: [AuthGuardGuard] },
      { path: ':id', component: DetailsComponent },
      {
        path: ':movieId/shows',
        component: ShowsListingComponent,
      },
      { path: 'search/:movieName', component: SearchComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class MovieRoutingModule { }
