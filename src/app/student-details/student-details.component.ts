import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../model/Student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {

  @Input() student: Student;

}
