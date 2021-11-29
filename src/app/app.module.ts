import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



import { AppComponent } from './app.component';

import { StudentsComponent } from './students/students.component';
import { CoursesComponent } from './courses/courses.component';
import { ErrorPageComponent } from './errorpage/errorpage.component';
import { RoutingModule } from './routing.module';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { CreateRecComponent } from './students/createrec/createrec.component';
import { EditRecComponent } from './students/editrec/editrec.component';
import { CreateCourseComponent } from './courses/createcourse/createcourse.component';
import { EditCourseComponent } from './courses/editcourse/editcourse.component';



@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    CoursesComponent,
    ErrorPageComponent,
    PageNotFoundComponent,
    CreateRecComponent,
    EditRecComponent,
    CreateCourseComponent,
    EditCourseComponent,
   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [
 
],
  bootstrap: [AppComponent]
})
export class AppModule { }
