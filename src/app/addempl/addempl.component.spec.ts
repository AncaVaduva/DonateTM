import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddemplComponent } from './addempl.component';

describe('AddemplComponent', () => {
  let component: AddemplComponent;
  let fixture: ComponentFixture<AddemplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddemplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddemplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
