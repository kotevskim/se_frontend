import {Component, OnInit} from '@angular/core';
import {Student} from '../model/Student';
import {StudentManagementService} from '../student-management.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  public students: Student[];

  constructor(private service: StudentManagementService) {}

  ngOnInit() {
    this.service.getStudents()
      .subscribe(students => this.students = students);
  }

  delete(student: Student): void {
    const index: number = this.students.indexOf(student);
    this.service.deleteStudent(student.id)
      .subscribe((() => { this.students.splice(index, 1); } ));
  }

}
