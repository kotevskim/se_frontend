import {
  Component, OnInit
} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Student} from '../model/Student';
import {StudentManagementService} from '../student-management.service';
import {StudyProgramService} from '../study-program.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {StudyProgram} from '../model/StudyProgram';
import {Location} from '@angular/common';

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
              private router: Router,
              private location: Location) {
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

  prepareSaveStudent() {
    const formModel = this.studentForm.value;
    this.student.firstName = formModel.firstName as string;
    this.student.lastName = formModel.lastName as string;
    this.student.studyProgram =
      this.studyPrograms.find(p => p.name === formModel.studyProgram);
  }

  onSubmit() {
    this.prepareSaveStudent();
    console.log(JSON.stringify(this.student));
    this.service.updateStudent(this.student.id, this.student)
      .subscribe(() => { this.router.navigateByUrl('/list'); } );
  }

  revert() {
    this.studentForm.setValue({firstName: '', lastName: '', studyProgram: '', });
  }

  back() {
    this.location.back();
  }

  // TODO sledi eventi za disable na save kompecto vo formata posto vaka ako pisam nesto i ako izbrisam vo imeto mi dava da socuvam bez ime
}
