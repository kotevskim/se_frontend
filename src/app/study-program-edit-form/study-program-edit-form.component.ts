import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {StudyProgram} from '../model/StudyProgram';
import {StudentManagementService} from '../student-management.service';
import {StudyProgramService} from '../study-program.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-study-program-edit-form',
  templateUrl: './study-program-edit-form.component.html',
  styleUrls: ['./study-program-edit-form.component.css']
})
export class StudyProgramEditFormComponent implements OnInit {

  studyProgram: StudyProgram;
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private studyProgramService: StudyProgramService,
              private router: Router,
              private location: Location) {
  }


  ngOnInit(): void {
    this.createForm();

    this.route.paramMap.switchMap((params: ParamMap) => {
      const id: number = +params.get('id');
      return this.studyProgramService.findById(id);
    })
      .subscribe(sp => {
        this.studyProgram = sp;
        this.fillInForm();
      });
  }

  createForm() {
    this.form = this.fb.group({name: ''});
  }

  private fillInForm() {
    this.form.setValue({name: this.studyProgram.name, });
  }

  // These will be used for validation in the template
  get name() {
    return this.form.get('name');
  }

  prepareSaveStudyProgram() {
    this.studyProgram.name = this.form.value.name as string;
  }

  onSave() {
    this.prepareSaveStudyProgram();
    console.log(JSON.stringify(this.studyProgram));
    this.studyProgramService.updateStudyProgram(this.studyProgram.id, this.studyProgram)
      .subscribe(() => { this.router.navigateByUrl('study-programs/list'); } );
  }

  revert() {
    this.form.setValue({name: ''});
  }

  back() {
    this.location.back();
  }

}
