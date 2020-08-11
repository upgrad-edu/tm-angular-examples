import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { SearchService } from './search.service';
import { Router, ActivatedRoute } from '@angular/router';
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

  constructor(
    private location: Location,
    private searchService: SearchService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.searchService.movies().subscribe((res: any[]) => {
        this.rowData = res.filter((movie) => {
          const movieName = movie.name.toLowerCase();
          return movieName.indexOf(params.movieName.toLowerCase()) > -1
            ? true
            : false;
        });
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
