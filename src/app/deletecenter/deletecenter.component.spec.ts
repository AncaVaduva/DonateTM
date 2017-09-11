import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecenterComponent } from './deletecenter.component';

describe('DeletecenterComponent', () => {
  let component: DeletecenterComponent;
  let fixture: ComponentFixture<DeletecenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletecenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletecenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
