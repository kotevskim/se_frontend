import { Injectable } from '@angular/core';
import {Student} from './model/Student';
import {Address} from './model/Address';

@Injectable()
export class StudentManagementService {

  private students: Student[] = [
    new Student('Мартин', 'Котевски', 151132, 'Компјутерски науки и инженерство', new Address()),
    new Student('Алек', 'Ивановски', 151115, 'Компјутерски науки и инженерство', new Address()),
    new Student('Филип', 'Симоновски', 152103, 'Примена на Е-Технологии', new Address()),
    new Student('Теа', 'Здравковска', 151166, 'Мрежни технологии', new Address()),
    new Student('Никола', 'Момировски', 141216, 'Професионални студии по информатика', new Address()),
    new Student('Сара', 'Васевска', 161234, 'Мрежни технологии', new Address()),
    new Student('Христијан', 'Томовски', 154356, 'Примена на Е-Технологии', new Address()),
    new Student('Мартин', 'Јакимов', 153141, 'Компјутерски науки и инженерство', new Address())
  ];

  public getStudents(): Student[] {
    return this.students;
  }

  public updateStudent(student: Student) {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].index === student.index) {
        this.students[i] = student;
      }
    }
  }
}
