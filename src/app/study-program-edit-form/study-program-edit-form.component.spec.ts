import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyProgramEditFormComponent } from './study-program-edit-form.component';

describe('StudyProgramEditFormComponent', () => {
  let component: StudyProgramEditFormComponent;
  let fixture: ComponentFixture<StudyProgramEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyProgramEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyProgramEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
