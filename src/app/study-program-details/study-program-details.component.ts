import { Component, OnInit } from '@angular/core';
import { StudyProgramService } from '../study-program.service';
import { StudentManagementService } from '../student-management.service';
import {Student} from '../model/Student';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Location} from '@angular/common';
import {StudyProgram} from '../model/StudyProgram';

@Component({
  selector: 'app-study-program-details',
  templateUrl: './study-program-details.component.html',
  styleUrls: ['./study-program-details.component.css']
})
export class StudyProgramDetailsComponent implements OnInit {

  studyProgram: StudyProgram;
  students: Student[];

  constructor(
    private _studyProgramService: StudyProgramService,
    private _studentService: StudentManagementService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _location: Location) { }

  ngOnInit() {
    let id: number;
    this._route.paramMap
      .switchMap((params: ParamMap) => {
        id = +params.get('id');
        return this._studyProgramService.findById(id);
      })
      .subscribe(studyProgram => {
        this.studyProgram = studyProgram;
      });

    this._studentService.findByStudyProgram(id)
      .subscribe(s => {this.students = s; console.log(this.students);});
  }

  back(): void {
    this._location.back();
  }

}
