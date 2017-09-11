import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcentruComponent } from './formcentru.component';

describe('FormcentruComponent', () => {
  let component: FormcentruComponent;
  let fixture: ComponentFixture<FormcentruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormcentruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcentruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
