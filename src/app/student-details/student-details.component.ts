import {Component, OnInit} from '@angular/core';
import {StudentManagementService} from '../student-management.service';
import {Student} from '../model/Student';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  student: Student;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: StudentManagementService
  ) {}

  ngOnInit() {
     this.route.paramMap
      .switchMap((params: ParamMap) => {
        const index = params.get('index');
        return this.service.findByIndex(+index);
      })
      .subscribe(student => {
        this.student = student;
      });
  }

}
