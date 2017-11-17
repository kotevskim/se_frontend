import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {StudentDetailsComponent} from '../student-details/student-details.component';
import {StudentEditFormComponent} from '../student-edit-form/student-edit-form.component';
import {StudentListComponent} from '../student-list/student-list.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {StudentCreateFormComponent} from '../student-create-form/student-create-form.component';

const appRoutes: Routes = [
  { path: 'list', component: StudentListComponent },
  { path: 'edit/:index', component: StudentEditFormComponent },
  { path: 'new', component: StudentCreateFormComponent },
  { path: 'details/:index',      component: StudentDetailsComponent },
  { path: '',   redirectTo: '/list', pathMatch: 'full' },
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
