import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsListingComponent } from './shows-listing.component';

describe('ShowsListingComponent', () => {
  let component: ShowsListingComponent;
  let fixture: ComponentFixture<ShowsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
