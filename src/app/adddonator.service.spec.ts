import { TestBed, inject } from '@angular/core/testing';

import { AdddonatorService } from './adddonator.service';

describe('AdddonatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdddonatorService]
    });
  });

  it('should ...', inject([AdddonatorService], (service: AdddonatorService) => {
    expect(service).toBeTruthy();
  }));
});
