import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyProgramDetailsComponent } from './study-program-details.component';

describe('StudyProgramDetailsComponent', () => {
  let component: StudyProgramDetailsComponent;
  let fixture: ComponentFixture<StudyProgramDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyProgramDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyProgramDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
