import { TestBed, inject } from '@angular/core/testing';

import { StudyProgramService } from './study-program.service';

describe('StudyProgramService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudyProgramService]
    });
  });

  it('should be created', inject([StudyProgramService], (service: StudyProgramService) => {
    expect(service).toBeTruthy();
  }));
});
