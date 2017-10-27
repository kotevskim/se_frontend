import { Pipe, PipeTransform } from '@angular/core';
import {Student} from '../model/Student';

@Pipe({
  name: 'filterByLastName'
})
export class FilterByLastNamePipe implements PipeTransform {

  transform(students: Student[], filterQuery: string): Student[] {
    if (!filterQuery) return students;
    return students.filter(student => student.lname.toLowerCase().lastIndexOf(filterQuery.toLowerCase()) !== -1);
  }

}
