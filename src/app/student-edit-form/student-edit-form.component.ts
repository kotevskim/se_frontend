import {
  AfterContentInit, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit,
  Output
} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {studyPrograms, states} from '../model/constants';
import {Address} from '../model/Address';
import {Student} from '../model/Student';
import {StudentManagementService} from '../student-management.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-student-edit-form',
  templateUrl: './student-edit-form.component.html',
  styleUrls: ['./student-edit-form.component.css']
})
export class StudentEditFormComponent implements OnInit, DoCheck {

  @Input() student: Student;
  @Output() onStudentEdit = new EventEmitter<Student>();
  studentForm: FormGroup;
  studyPrograms = studyPrograms;
  states = states;

  ngOnInit(): void {
    this.route.paramMap.switchMap((params: ParamMap) => {
      const index = params.get('index');
      const studentPromise = this.service.findByIndex(index);
      studentPromise.catch(
        error => {
          console.error(error.errorMessage);
        }
      );
      return studentPromise;
    })
      .subscribe(s => {
        this.student = s;
      });
  }

  constructor(private fb: FormBuilder,
              private service: StudentManagementService,
              private route: ActivatedRoute) {
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

  ngDoCheck() {
    // this.populateForm();
  }

  private populateForm() {
    this.studentForm.setValue({
      firstName: this.student.firstName,
      lastName: this.student.lastName,
      studyProgram: this.student.studyProgram,
      address: this.student.address
    });
  }

  // These will be used for validation in the template
  get firstName() {
    return this.studentForm.get('firstName');
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
    this.service.edit(this.student.index, this.student)
      .then(studentFromServer => this.student = studentFromServer);


    // this.onStudentEdit.emit(this.student);
  }

  revert() {
    // this.ngOnChanges();
  }
}
