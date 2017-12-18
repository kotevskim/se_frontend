import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {StudyProgram} from './model/StudyProgram';

@Injectable()
export class StudyProgramService {

  private studyProgramsUrl = 'http://localhost:8080/api/study-programs';  // URL to web api

  constructor(private http: HttpClient) {
  }

  getStudyPrograms(): Observable<StudyProgram[]> {
    return this.http.get<StudyProgram[]>(this.studyProgramsUrl);
  }

}
