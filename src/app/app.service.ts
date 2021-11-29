import { Injectable } from '@angular/core';
import { Course } from './courses/course.model';

import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

export const COLLAGE_SITE = 'http://localhost:6501/';


@Injectable({ providedIn: 'root' })
export class AppService {
 
    activeCategory: string;

    lManageCourses: Course[] = [];

  
    
    constructor(private http: HttpClient,private router: Router) {

    }
    MyErrorHandler(error:any){
//       const msg =(((typeof(error) === 'string')&&error)
     
//      || ((typeof(error === 'Object'))&&(error["status"])&&(error["status"]===403) &&"You Arn not Authorize to this action")
     
//      ||error.massage
//       ||error["url"])
           
//       this.router.navigate(['/ErrorPage'],
//               {queryParams: {message: msg, title:error.status }});

     }  
   
      
}