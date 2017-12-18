import {
  Component, OnInit
} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Student} from '../model/Student';
import {StudentManagementService} from '../student-management.service';
import {StudyProgramService} from '../study-program.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {StudyProgram} from '../model/StudyProgram';

@Component({
  selector: 'app-student-edit-form',
  templateUrl: './student-edit-form.component.html',
  styleUrls: ['./student-edit-form.component.css']
})
export class StudentEditFormComponent implements OnInit {

  student: Student;
  studentForm: FormGroup;
  studyPrograms: StudyProgram[];

  constructor(private fb: FormBuilder,
              private service: StudentManagementService,
              private route: ActivatedRoute,
              private studyProgramService: StudyProgramService,
              private router: Router) {
  }


  ngOnInit(): void {
    this.createForm();
    this.studyProgramService.getStudyPrograms()
      .subscribe(programs => {
        this.studyPrograms = programs;
      });

    this.route.paramMap.switchMap((params: ParamMap) => {
      const index = params.get('index');
      return this.service.findByIndex(+index);
    })
      .subscribe(s => {
        this.student = s;
        this.fillInForm();
      });
  }

  createForm() {
    this.studentForm = this.fb.group({
      firstName: '',
      lastName: '',
      studyProgram: ''
    });
  }

  private fillInForm() {
    this.studentForm.setValue({
      firstName: this.student.firstName,
      lastName: this.student.lastName,
      studyProgram: this.student.studyProgram.name,
    });
  }

  // These will be used for validation in the template
  get firstName() {
    return this.studentForm.get('firstName');
  }

  get lastName() {
    return this.studentForm.get('lastName');
  }

  // prepareSaveStudent(): Student {
  // const formModel = this.studentForm.value;
  // return new Student(
  //   formModel.firstName as string,
  //   formModel.lastName as string,
  //   this.student.index,
  //   formModel.studyProgram as string,
  //   new Address(formModel.address.street, formModel.address.city, formModel.address.state, formModel.address.zip)
  // );
  // }

  onSubmit() {
    const formModel = this.studentForm.value;

    let studyProgram = null;
    this.studyPrograms.forEach(p => {
      if (p.name === formModel.studyProgram) {
        studyProgram = p;
      }
    });

    const s = new Student(
      this.student.id,
      formModel.firstName as string,
      formModel.lastName as string,
      studyProgram
    );
    console.log(JSON.stringify(s));
    this.service.updateStudent(s.id, s)
      .subscribe(() => { this.router.navigateByUrl('/list'); } );

    // this.student = this.prepareSaveStudent();
    // this.service.edit(this.student.id, this.student)
    //   .then(studentFromServer => this.student = studentFromServer);
    // this.router.navigateByUrl('/list');
  }

  revert() {
    this.createForm();
  }

  // TODO sledi eventi za disable na save kompecto vo formata posto vaka ako pisam nesto i ako izbrisam vo imeto mi dava da socuvam bez ime
}
