import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie/movie.component';
import { MovieRoutingModule } from './movie-routing.module';
import { ShowsListingComponent } from './movie/shows-listing/shows-listing.component';
import { DetailsComponent } from './movie/details/details.component';
import { AddComponent } from './movie/add/add.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './movie/book/book.component';
import { SearchComponent } from './movie/search/search.component';
import { AgGridModule } from 'ag-grid-angular';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    MovieComponent,
    ShowsListingComponent,
    DetailsComponent,
    AddComponent,
    BookComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    FormsModule,
    AgGridModule.withComponents([]),
    ToastrModule.forRoot(),
    SharedModule
  ],
})
export class MovieModule {}
