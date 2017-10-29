import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {studyPrograms, states} from '../model/constants';
import {Address} from '../model/Address';
import {Student} from '../model/Student';
import {StudentManagementService} from '../student-management.service';

@Component({
  selector: 'app-student-edit-form',
  templateUrl: './student-edit-form.component.html',
  styleUrls: ['./student-edit-form.component.css']
})
export class StudentEditFormComponent implements OnChanges {

  @Input() student: Student;
  @Output() onStudentEdit = new EventEmitter<Student>();
  studentForm: FormGroup;
  studyPrograms = studyPrograms;
  states = states;

  constructor(private fb: FormBuilder, private studentService: StudentManagementService) {
    this.createForm();
  }

  createForm() {
    this.studentForm = this.fb.group({
      firstName: [Validators.required, Validators.minLength(3)],
      lastName: ['', Validators.required],
      studyProgram: '',
      address: this.fb.group(new Address())
    });
  }

  // These will be used for validation in the template
  get firstName() { return this.studentForm.get('firstName'); }

  ngOnChanges(): void {
    this.studentForm.reset({
      firstName: this.student.firstName,
      lastName: this.student.lastName,
      studyProgram: this.student.studyProgram,
      address: this.student.address
    });
  }

  prepareSaveStudent(): Student {
    const formModel = this.studentForm.value;

    return new Student(
      formModel.firstName as string,
      formModel.lastName as string,
      this.student.index,
      formModel.studyProgram as string,
      new Address(formModel.address.street, formModel.address.city, formModel.address.state, formModel.address.zip)
    );
  }

  onSubmit() {
    this.student = this.prepareSaveStudent();
    this.studentService.updateStudent(this.student);
    this.onStudentEdit.emit(this.student);
    this.ngOnChanges();
  }

  revert() { this.ngOnChanges(); }
}
