import { Component } from '@angular/core';
import {StudentManagementService} from './student-management.service';
import {Student} from "./model/Student";
import {Address} from "./model/Address";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentManagementService]
})
export class AppComponent {
  title = 'Students';
  st: Student=new Student('Ivan', 'Ivanovski', '11323', 'kni', new Address());
}
