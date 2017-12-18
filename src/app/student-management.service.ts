import {Injectable} from '@angular/core';
import {Student} from './model/Student';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {StudyProgram} from './model/StudyProgram';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class StudentManagementService {

  private studentsUrl = 'http://localhost:8080/api/students';  // URL to web api

  constructor(private http: HttpClient) {
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl);
  }

  findByIndex(id: number): Observable<Student> {
    const url = `${this.studentsUrl}/${id}`;
    return this.http.get<Student>(url);
  }

  updateStudent(id: number, student: Student): Observable<any> {
    const url = `${this.studentsUrl}/${id}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    // const body = `firstName=${student.firstName}&lastName=${student.lastName}&studyProgramName=${student.studyProgram.name}`;
    return this.http.patch(url, student, httpOptions);
  }

  addStudent(newStudent: Student): boolean {
    // const studentsFromServer = [];
    // Object.assign(studentsFromServer, this.studentSource.getValue());
    // const result = studentsFromServer.find(s => s.id === newStudent.id);
    // if (!result) { // only if student does not exist
    //   studentsFromServer.push(newStudent);
    //   this.studentSource.next(studentsFromServer);
    //   return true;
    // }
    // return false;
    return true;
  }

}
