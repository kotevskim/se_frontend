import { Component } from '@angular/core';
import {StudentManagementService} from './student-management.service';
import {StudyProgramService} from './study-program.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentManagementService, StudyProgramService]
})
export class AppComponent {
  title = 'Students';
}
