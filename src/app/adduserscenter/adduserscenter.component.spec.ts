import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdduserscenterComponent } from './adduserscenter.component';

describe('AdduserscenterComponent', () => {
  let component: AdduserscenterComponent;
  let fixture: ComponentFixture<AdduserscenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdduserscenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdduserscenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
