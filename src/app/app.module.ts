import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { FilterByLastNamePipe } from './pipes/filter-by-last-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    FilterByLastNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
