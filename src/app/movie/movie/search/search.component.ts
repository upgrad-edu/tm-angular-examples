import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { SearchService } from './search.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  columnDefs = [
    { name: 'Movie Name', sortable: true, filter: true, field: 'name' },
    { duration: 'Duration', sortable: true, filter: true, field: 'duration' },
    {
      description: 'Description',
      sortable: true,
      filter: true,
      field: 'description',
    },
    {
      releaseDate: 'Released on',
      sortable: true,
      filter: true,
      field: 'releaseDate',
    },
    {
      languageId: 'Language',
      sortable: true,
      filter: true,
      field: 'languageId',
    },
    {
      trailerURL: 'Trailer',
      sortable: true,
      filter: true,
      field: 'trailerURL',
    },
  ];

  rowData: any = [];
  sub: Subscription;

  constructor(
    private location: Location,
    private searchService: SearchService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe((params) => {
      this.searchService.movies().subscribe((res: any[]) => {
        this.rowData = res.filter(
          (movie) => movie.name.indexOf(params.movieName) > -1
        );
      });
    });
  }

  goBack() {
    this.location.back();
  }

  onRowClicked(movie) {
    this.router.navigate([`/movie/${movie.data.movieId}`]);
  }
}
