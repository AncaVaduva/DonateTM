import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddalarmComponent } from './addalarm.component';

describe('AddalarmComponent', () => {
  let component: AddalarmComponent;
  let fixture: ComponentFixture<AddalarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddalarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddalarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
