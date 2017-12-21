import {Injectable} from '@angular/core';
import {Student} from './model/Student';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
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

  findByStudyProgram(id: number): Observable<Student[]> {
    const url = `${this.studentsUrl}/by-study-program/${id}`;
    console.log(url);
    return this.http.get<Student[]>(url);
  }

  updateStudent(id: number, student: Student): Observable<any> {
    const url = `${this.studentsUrl}/${id}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.patch<Student>(url, student, httpOptions);
  }

  addStudent(student: Student): Observable<Student> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Student>(this.studentsUrl, student, httpOptions);
  }

  deleteStudent(id: number): Observable<any> {
    const url = `${this.studentsUrl}/${id}`;
    return this.http.delete<any>(url);
}

}
