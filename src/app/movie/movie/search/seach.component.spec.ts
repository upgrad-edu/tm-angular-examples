import { SearchComponent } from './search.component';
import { Location } from '@angular/common';
import { SearchService } from './search.service';
import { Router, ActivatedRoute } from '@angular/router';

let searchComponent: SearchComponent;
let location: Location;
let searchService: SearchService;
let router: Router;
let activatedRoute: ActivatedRoute;

const movie = {
  data: {
    movieId: 0
  }
};

describe('Search - Component', () => {
  beforeEach(() => {
    location = jasmine.createSpyObj('location', ['back']);
    searchService = jasmine.createSpyObj('searchService', ['movies']);
    router = jasmine.createSpyObj('router', ['navigate']);
    activatedRoute = jasmine.createSpyObj('activatedRoute', ['activatedRoute']);
    searchComponent = new SearchComponent(location, searchService, router, activatedRoute);
  });

  it('Should create SearchComponent', () => {
    expect(searchService).toBeDefined();
  });

  it('Should call navigate', () => {
    searchComponent.onRowClicked(movie);
    expect(router.navigate).toHaveBeenCalled();
  });

  it('Should call back', () => {
    searchComponent.goBack();
    expect(location.back).toHaveBeenCalled();
  });
});
