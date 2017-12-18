import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { FilterByNamePipe } from './pipes/filter-by-name.pipe';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentEditFormComponent } from './student-edit-form/student-edit-form.component';
import {StudentListComponent} from './student-list/student-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { AppRoutingModule} from './app-routing/app-routing.module';
import { StudentCreateFormComponent } from './student-create-form/student-create-form.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    FilterByNamePipe,
    StudentFormComponent,
    StudentEditFormComponent,
    PageNotFoundComponent,
    StudentListComponent,
    StudentCreateFormComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
