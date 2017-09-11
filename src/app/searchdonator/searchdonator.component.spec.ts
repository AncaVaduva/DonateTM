import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdonatorComponent } from './searchdonator.component';

describe('SearchdonatorComponent', () => {
  let component: SearchdonatorComponent;
  let fixture: ComponentFixture<SearchdonatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchdonatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchdonatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
