import { Injectable } from '@angular/core';
import {Student} from './model/Student';

@Injectable()
export class StudentManagementService {

  constructor() {  }

  public getStudents(): Student[] {
    return [
      new Student('Martin', 'Kotevski', 151132, 'KNI'),
      new Student('Alek', 'Ivanovski', 151115, 'KNI'),
      new Student('Filip', 'Simonovski', 152103, 'PET'),
      new Student('Tea', 'Zdravskovska', 151166, 'KNI')
    ];
  }

}
