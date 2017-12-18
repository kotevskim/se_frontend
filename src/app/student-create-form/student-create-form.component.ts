import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {StudentManagementService} from '../student-management.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Student} from '../model/Student';
import {Address} from '../model/Address';
import {studyPrograms, states} from '../model/constants';
import {StudyProgram} from '../model/StudyProgram';

@Component({
  selector: 'app-student-create-form',
  templateUrl: './student-create-form.component.html',
  styleUrls: ['./student-create-form.component.css']
})
export class StudentCreateFormComponent implements OnInit {

  canAdd: boolean; // whether the student can be added
  student: Student;
  studentForm: FormGroup;
  // TODO implement separate service providers for study programs and states and inject them in the constructor
  studyPrograms = studyPrograms;
  states = states;

  ngOnInit(): void {
  }

  constructor(private fb: FormBuilder,
              private service: StudentManagementService,
              private router: Router) {
    this.createForm();
    this.canAdd = true;
  }

  createForm() {
    this.studentForm = this.fb.group({
      index: '',
      firstName: '',
      lastName: '',
      studyProgram: '',
      address: this.fb.group(new Address())
    });
  }

  // These will be used for validation in the template
  get firstName() {
    return this.studentForm.get('firstName');
  }

  get lastName() {
    return this.studentForm.get('lastName');
  }

  prepareSaveStudent(): Student {
    const formModel = this.studentForm.value;
    return new Student(
      formModel.index as number,
      formModel.firstName as string,
      formModel.lastName as string,
      new StudyProgram(1, 'KNI')
      // formModel.studyProgram as string,
    );
  }

  onSubmit() {
    this.student = this.prepareSaveStudent();
    const added = this.service.addStudent(this.student);
    if (added) {
      this.router.navigateByUrl('/list');
    } else {
      this.canAdd = false;
    }
  }

  revert() {
    this.router.navigateByUrl('/list');
  }

}
