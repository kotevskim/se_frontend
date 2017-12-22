import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {StudentDetailsComponent} from '../student-details/student-details.component';
import {StudentEditFormComponent} from '../student-edit-form/student-edit-form.component';
import {StudentListComponent} from '../student-list/student-list.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {StudentCreateFormComponent} from '../student-create-form/student-create-form.component';
import {StudyProgramListComponent} from "../study-program-list/study-program-list.component";
import {StudyProgramDetailsComponent} from "../study-program-details/study-program-details.component";
import {StudyProgramEditFormComponent} from "../study-program-edit-form/study-program-edit-form.component";
import {StudyProgramCreateFromComponent} from "../study-program-create-from/study-program-create-from.component";

const appRoutes: Routes = [
  { path: 'students/list', component: StudentListComponent },
  { path: 'edit/:index', component: StudentEditFormComponent },
  { path: 'new', component: StudentCreateFormComponent },
  { path: 'details/:index', component: StudentDetailsComponent },
  { path: 'study-programs/list', component: StudyProgramListComponent },
  { path: 'study-programs/details/:id', component: StudyProgramDetailsComponent },
  { path: 'study-programs/edit/:id', component: StudyProgramEditFormComponent },
  { path: 'study-programs/new', component: StudyProgramCreateFromComponent },
  { path: '',   redirectTo: 'students/list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    CommonModule
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
