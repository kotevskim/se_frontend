import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {StudyProgram} from '../model/StudyProgram';
import {StudyProgramService} from '../study-program.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-study-program-create-from',
  templateUrl: './study-program-create-from.component.html',
  styleUrls: ['./study-program-create-from.component.css']
})
export class StudyProgramCreateFromComponent implements OnInit {

  canAdd: boolean; // whether the student can be added
  form: FormGroup;

  ngOnInit(): void {
    this.createForm();
  }

  constructor(private fb: FormBuilder,
              private studyProgramService: StudyProgramService,
              private router: Router,
              private location: Location) {
    this.canAdd = true;
  }

  createForm() {
    this.form = this.fb.group({name: ''});
  }

  // These will be used for validation in the template
  get name() {
    return this.form.get('name');
  }

  prepareSaveStudyProgram(): StudyProgram {
    const name: string = this.form.value.name as string;
    return new StudyProgram(0, name);
  }

  onSave() {
    const studyProgram: StudyProgram = this.prepareSaveStudyProgram();
    console.log(JSON.stringify(studyProgram));
    // we must subscribe because addStudent() sends post method which is idempotent
    this.studyProgramService.addStudyProgram(studyProgram)
      .subscribe(() => {
        this.router.navigateByUrl('/study-programs/list');
      });
  }

  revertForm() {
    this.form.value.name = '';
  }

  back(): void {
    this.location.back();
  }


}
