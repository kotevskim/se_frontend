import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {StudyProgram} from './model/StudyProgram';
import {Student} from "./model/Student";

@Injectable()
export class StudyProgramService {

  private studyProgramsUrl = 'http://localhost:8080/api/study-programs';  // URL to web api

  constructor(private http: HttpClient) {
  }

  getStudyPrograms(): Observable<StudyProgram[]> {
    return this.http.get<StudyProgram[]>(this.studyProgramsUrl);
  }

  findById(id: number): Observable<StudyProgram> {
    const url = `${this.studyProgramsUrl}/${id}`;
    return this.http.get<StudyProgram>(url);
  }

  updateStudyProgram(id: number, studyProgram: StudyProgram): Observable<any> {
    const url = `${this.studyProgramsUrl}/${id}`;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.patch<StudyProgram>(url, studyProgram, httpOptions);
  }

  addStudyProgram(studyProgram: StudyProgram): Observable<StudyProgram> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post<StudyProgram>(this.studyProgramsUrl, studyProgram, httpOptions);
  }

  deleteStudyProgram(id: number): Observable<any> {
    const url = `${this.studyProgramsUrl}/${id}`;
    console.log(url);
    return this.http.delete<any>(url);
  }

}
