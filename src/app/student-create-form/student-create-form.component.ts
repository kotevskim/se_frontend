import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {StudentManagementService} from '../student-management.service';
import {StudyProgramService} from '../study-program.service';
import {Router} from '@angular/router';
import {StudyProgram} from '../model/StudyProgram';
import {Student} from '../model/Student';
import {Location} from '@angular/common';

@Component({
  selector: 'app-student-create-form',
  templateUrl: './student-create-form.component.html',
  styleUrls: ['./student-create-form.component.css']
})
export class StudentCreateFormComponent implements OnInit {

  canAdd: boolean; // whether the student can be added
  studentForm: FormGroup;
  studyPrograms: StudyProgram[];

  ngOnInit(): void {
    this.createForm();
    this.studyProgramService.getStudyPrograms()
      .subscribe(programs => {
        this.studyPrograms = programs;
      });
  }

  constructor(private fb: FormBuilder,
              private service: StudentManagementService,
              private studyProgramService: StudyProgramService,
              private router: Router,
              private location: Location) {
    this.canAdd = true;
  }

  createForm() {
    this.studentForm = this.fb.group({
      id: '',
      firstName: '',
      lastName: '',
      studyProgram: '',
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
    const id: number = formModel.id as number;
    const firstName: string = formModel.firstName as string;
    const lastName: string = formModel.lastName as string;
    const studyProgram: StudyProgram =
      this.studyPrograms.find(p => p.name === formModel.studyProgram);
    return new Student(id, firstName, lastName, studyProgram);
  }

  onSave() {
    const student: Student = this.prepareSaveStudent();
    // console.log(JSON.stringify(s));
    // we must subscribe because addStudent() sends post method which is idempotent
    this.service.addStudent(student)
      .subscribe(() => {
        this.router.navigateByUrl('/students/list');
      });
  }

  revertForm() {
    this.studentForm.value.id = '';
    this.studentForm.value.firstName = '';
    this.studentForm.value.lastName = '';
    this.studentForm.value.studyProgram = '';
  }

  back(): void {
    this.location.back();
  }

}
