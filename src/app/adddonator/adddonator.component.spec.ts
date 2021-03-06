import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddonatorComponent } from './adddonator.component';

describe('AdddonatorComponent', () => {
  let component: AdddonatorComponent;
  let fixture: ComponentFixture<AdddonatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddonatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddonatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
