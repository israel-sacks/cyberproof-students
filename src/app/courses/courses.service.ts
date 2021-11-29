
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {  map} from 'rxjs/operators';

import { AppService,COLLAGE_SITE } from '../app.service';

import { Course } from './course.model';


@Injectable({ providedIn: 'root' })
export class CoursesService {
    err:string = "";
    title:string = "";

    constructor(private http: HttpClient, private router: Router,public appService: AppService,
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
        .subscribe(
                  courses => {
                    this.appService.lManageCourses = courses;
                  },
                  error=>{
                    this.appService.MyErrorHandler(error);
                      }
                  )
    }
   
    CreateCourse(CourseName: string){
          return this.http.post(`${COLLAGE_SITE}courses`,{CourseName})
                  .subscribe(
                  () => {
                    this.router.navigate(['/courses']);
                  },
                  
                  error=>{
                    this.appService.MyErrorHandler(error);
                  }
                  
                  ); 
    }
   
    GetCourse(id: string){
      
              return this.http.get
                (`${COLLAGE_SITE}courses/${id}`)
                
                ;
    }
   
    UpdateCourse(id: string,CourseName: string) {
       
        return this.http.put
                (`${COLLAGE_SITE}courses/${id}`,
                {id,CourseName})
                .subscribe(
                  () => {
                    this.router.navigate(['/courses']);
                  },
                  error=>{
                    this.appService.MyErrorHandler(error);
                      }
                  )
        }
        DeleteCourse(id: string) {
        
          return this.http.delete
                  (`${COLLAGE_SITE}courses/${id}`)
                
          .subscribe(
            () => {
              let currentUrl = this.router.url;
              this.router.navigateByUrl('/', {skipLocationChange: true})
                         .then(() => { this.router.navigate([currentUrl]);});
            },
            error=>{
              this.appService.MyErrorHandler(error);
                }
            ); 
          }
        
}