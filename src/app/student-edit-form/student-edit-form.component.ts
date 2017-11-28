import {
  Component, OnInit
} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {studyPrograms, states} from '../model/constants';
import {Address} from '../model/Address';
import {Student} from '../model/Student';
import {StudentManagementService} from '../student-management.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-student-edit-form',
  templateUrl: './student-edit-form.component.html',
  styleUrls: ['./student-edit-form.component.css']
})
export class StudentEditFormComponent implements OnInit {

  student: Student;
  studentForm: FormGroup;
  // TODO implement separate service providers for study programs and states and inject them in the constructor
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
        this.fillInForm();
      });

  }

  constructor(private fb: FormBuilder,
              private service: StudentManagementService,
              private route: ActivatedRoute,
              private router: Router) {
    this.createForm();
  }

  createForm() {
    this.studentForm = this.fb.group({
      firstName: '',
      lastName: '',
      studyProgram: '',
      address: this.fb.group(new Address())
    });
  }

  private fillInForm() {
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

  get lastName() {
    return this.studentForm.get('lastName');
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
    this.router.navigateByUrl('/list');
  }

  revert() {
    this.createForm();
  }

  //TODO sledi eventi za disable na save kompecto vo formata posto vaka ako pisam nesto i ako izbrisam vo imeto mi dava da socuvam bez ime
}
