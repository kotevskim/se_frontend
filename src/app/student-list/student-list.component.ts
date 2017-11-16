import {Component, OnInit} from '@angular/core';
import {Student} from '../model/Student';
import {StudentManagementService} from '../student-management.service';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  public students: Student[];

  constructor(private service: StudentManagementService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.service.getStudents()
      .subscribe(students => this.students = students);
  }

  // onSelect(student: Student) {
  //   this.selectedStudent = student;
  // }
  //
  // updateList(student: Student) {
  //   this.ngOnInit();
  //   this.selectedStudent = student;
  // }

}
