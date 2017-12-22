import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyProgramCreateFromComponent } from './study-program-create-from.component';

describe('StudyProgramCreateFromComponent', () => {
  let component: StudyProgramCreateFromComponent;
  let fixture: ComponentFixture<StudyProgramCreateFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyProgramCreateFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyProgramCreateFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
