import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { FilterByNamePipe } from './pipes/filter-by-name.pipe';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentEditFormComponent } from './student-edit-form/student-edit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    FilterByNamePipe,
    StudentFormComponent,
    StudentEditFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
