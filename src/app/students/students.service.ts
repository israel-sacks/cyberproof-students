import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, concatMap, map, mergeMap } from 'rxjs/operators';
import { AppService, COLLAGE_SITE } from '../app.service';


import { Course } from '../courses/course.model';

import { Student } from './student.model';
import { v_students } from './v_students.model';

@Injectable({ providedIn: 'root' })
export class StudentsService {
    err:string = "";
    title:string = "";
    constructor(private http: HttpClient, private router: Router,private Route: ActivatedRoute,private appService: AppService
      ) {}
           GetCourses() {
         
          return this.http.get<Course[]>(`${COLLAGE_SITE}courses`)  
          .pipe(
               map(responseData => {
                 const courseArray: Course[] = [];
                 for (const key in responseData) {
                   if (responseData.hasOwnProperty(key)) {
                    
                    courseArray.push({ ...responseData[key]});
                   }
                 }
                 return courseArray;
               })) 
        }
        GetRecord(id: string){
          
          return this.http.get<Student>
                  (`${COLLAGE_SITE}students/edit/${id}`)
                  .pipe(
                    map(responseData => {
                    return responseData;
                  }))

          }
          GetRecords(id: string) {
           
          return this.http.get<v_students[]>
                  (`${COLLAGE_SITE}students/${id}`)
          .pipe(
               map(responseData => {
                 const v_studentsArray: v_students[] = [];
                 for (const key in responseData) {
                   if (responseData.hasOwnProperty(key)) {
                    v_studentsArray.push({ ...responseData[key]});
                   }
                 }
                 return v_studentsArray;
               }))

          }
         CreateRecord(StudentName: string, CourseId: string, Marks: string ) {
         
            return this.http.post
                (`${COLLAGE_SITE}students`,
                {StudentName, CourseId, Marks })
                .subscribe(
                  () => {
                    this.router.navigate(['/students']);
                  },
                  error => {
                    this.appService.MyErrorHandler(error);
                  }); 
        }
        UpdateRecord(id: string,StudentName: string, CourseId: string, Marks: string ) {
   
            return this.http.put
                  (`${COLLAGE_SITE}students/${id}`,
                  {id,StudentName, CourseId, Marks })
                  .subscribe(
                    () => {
                      this.router.navigate(['/students']);
                    },
                    error => {
                      this.appService.MyErrorHandler(error);
                    }); 
                 
          }
         DeleteRecords(id: string) {
        
            return this.http.delete(`${COLLAGE_SITE}students/${id}`)
         
            .subscribe(() => {
                      let currentUrl = this.router.url;
                    this.router.navigateByUrl('/', {skipLocationChange: true})
                            .then(() => { this.router.navigate([currentUrl]);});
            },
              error =>{
                console.log(error);
                this.appService.MyErrorHandler(error);
              }
            )
          } 
}