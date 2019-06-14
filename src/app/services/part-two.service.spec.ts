import { TestBed, inject } from '@angular/core/testing';

import { PartTwoService } from './part-two.service';

describe('PartOneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartTwoService]
    });
  });

  it('should be created', inject([PartTwoService], (service: PartTwoService) => {
    expect(service).toBeTruthy();
  }));
});
