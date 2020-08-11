import { SearchComponent } from './search.component';
import { SearchService } from './search.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

let searchComponent: SearchComponent;
let location: Location;
let searchService: SearchService;
let router: Router;
let activatedRoute: ActivatedRoute;

const movie = {
  data: {
    movieId: 1
  }
};

describe('Search Component', () => {

  beforeEach(() => {

    location = jasmine.createSpyObj('location', ['back']);
    searchService = jasmine.createSpyObj('searchService', ['movies']);
    router = jasmine.createSpyObj('router', ['navigate']);
    activatedRoute = jasmine.createSpyObj('activatedRoute', ['activatedRoute']);

    searchComponent = new SearchComponent(location, searchService, router, activatedRoute);

  });

  it('should create searchComponent', () => {
    expect(searchService).toBeDefined();
  });

  it('should call navigate', () => {
    searchComponent.onRowClicked(movie);
    expect(router.navigate).toHaveBeenCalled();
  });

  it('should call goback', () => {
    searchComponent.goBack();
    expect(location.back).toHaveBeenCalled();
  });

});
