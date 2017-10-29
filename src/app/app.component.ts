import { Component, OnInit } from '@angular/core';
import {StudentManagementService} from './student-management.service';
import { Student } from './model/Student';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentManagementService]
})
export class AppComponent implements OnInit {

  title = 'Students';
  STUDENTS: Student[];
  selectedStudent: Student;

  constructor(private studentManagementService: StudentManagementService) {}

  ngOnInit(): void {
    this.STUDENTS = this.studentManagementService.getStudents();
  }

  onSelect(student: Student) {
    this.selectedStudent = student;
  }

  updateList(student: Student) {
    this.ngOnInit();
    this.selectedStudent = student;
  }
}
