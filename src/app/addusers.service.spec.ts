import { TestBed, inject } from '@angular/core/testing';

import { AddusersService } from './addusers.service';

describe('AddusersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddusersService]
    });
  });

  it('should ...', inject([AddusersService], (service: AddusersService) => {
    expect(service).toBeTruthy();
  }));
});
