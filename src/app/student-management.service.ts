import { Injectable } from '@angular/core';
import {Student} from './model/Student';
import {Address} from './model/Address';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class StudentManagementService {


  private studentSource = new BehaviorSubject<Student[]>([
    new Student('Мартин', 'Котевски', '151132', 'Компјутерски науки и инженерство', new Address()),
    new Student('Алек', 'Ивановски', '151115', 'Компјутерски науки и инженерство', new Address()),
    new Student('Филип', 'Симоновски', '152103', 'Примена на Е-Технологии', new Address()),
    new Student('Теа', 'Здравковска', '151166', 'Мрежни технологии', new Address()),
    new Student('Никола', 'Момировски', '141216', 'Професионални студии по информатика', new Address()),
    new Student('Сара', 'Васевска', '161234', 'Мрежни технологии', new Address()),
    new Student('Христијан', 'Томовски', '154356', 'Примена на Е-Технологии', new Address()),
    new Student('Мартин', 'Јакимов', '153141', 'Компјутерски науки и инженерство', new Address())
  ]);

  getStudents(): Observable<Student[]> {
    return this.studentSource.asObservable();
  }

  findByIndex(index: string): Promise<Student> {
    const result = this.studentSource.getValue().filter(student => student.index === index);
    if (result && result.length > 0) {
      return Promise.resolve(result[0]);
    } else {
      return Promise.reject({
        errorMessage: 'No student with the given index found',
        errorCode: 404
      });
    }
  }

  edit(index: string, updatedStudent: Student): Promise<Student> {
    // simulation of the change that the async call will make
    const studentsFromServer = [];
    Object.assign(studentsFromServer, this.studentSource.getValue());

    const studentToChange = studentsFromServer.find(s => s.index === index);
    Object.assign(studentToChange, updatedStudent);
    this.studentSource.next(studentsFromServer);

    return Promise.resolve(updatedStudent);
  }


}
