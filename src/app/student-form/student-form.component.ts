import {Component, Input,} from '@angular/core';
import {Student} from '../model/Student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {

  @Input() model: Student;

  studyPrograms = [
    'Компјутерски науки и инженерство',
    'Примена на Е-Технологии',
    'Професионални студии по информатика',
    'Мрежни технологии'
  ];

  submitted = false;

  onSubmit() { this.submitted = true; }

}
