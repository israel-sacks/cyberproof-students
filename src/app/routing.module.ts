import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { StudentsComponent } from './students/students.component';
import { CoursesComponent } from './courses/courses.component';
import { ErrorPageComponent } from './errorpage/errorpage.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { CreateRecComponent } from './students/createrec/createrec.component';
import { EditRecComponent } from './students/editrec/editrec.component';
import { CreateCourseComponent } from './courses/createcourse/createcourse.component';
import { EditCourseComponent } from './courses/editcourse/editcourse.component';


const appRouting: Routes = [
    { path: '', component: CoursesComponent },
    { path: 'students', component: StudentsComponent},
    { path: 'students/create', component: CreateRecComponent},
    { path: 'students/edit/:id', component: EditRecComponent},  
    { path: 'courses', component: CoursesComponent}, 
    { path: 'courses/create', component: CreateCourseComponent},
    { path: 'courses/edit/:id', component: EditCourseComponent},

    { path: 'ErrorPage', component: ErrorPageComponent},
    { path: 'PageNotFound', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/PageNotFound' }
  ];
  @NgModule({
    imports: [
        RouterModule.forRoot(appRouting)
    ],
    exports: [RouterModule]
  })
  export class RoutingModule {
  
  }