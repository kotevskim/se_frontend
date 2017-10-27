import { Pipe, PipeTransform } from '@angular/core';
import {Student} from '../model/Student';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(students: Student[], filterQuery: string): Student[] {
    if (!filterQuery) return students;
    return students.filter(student => {
      const fullName: string = (student.fname + ' ' + student.lname).toLowerCase();
      return fullName.lastIndexOf(filterQuery.toLowerCase()) !== -1;
    });
  }

}
