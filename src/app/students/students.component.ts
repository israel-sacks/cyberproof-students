import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

import { StudentsService } from './students.service';
import { v_students } from './v_students.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  lRecords: v_students[] = [];
  err:string = "";
  title:string = "";
  
  constructor(public appService: AppService,private router: Router,
    private studentsService: StudentsService) { }

  ngOnInit(): void {
    if (this.appService.activeCategory === null ||this.appService.activeCategory === undefined )
              this.appService.activeCategory = "-2";
    if (this.appService.lManageCourses === null ||
      this.appService.lManageCourses === undefined ||
      this.appService.lManageCourses.length === 0  )
      {
          this.studentsService.GetCourses().subscribe(
          courses => {
            //console.log(courses);
            this.appService.lManageCourses = courses;
            console.log (this.appService.lManageCourses);
          },
          error => {
            this.appService.MyErrorHandler(error);
          });
     }
    if (this.appService.activeCategory !=="-2")
      this.onGetRecords(this.appService.activeCategory);
}


  onGetRecords(id: string){
  this.appService.activeCategory=id;
 // console.log(id);
  this.studentsService.GetRecords(id).subscribe(
    records => {
      this.lRecords = records;
   //   console.log(this.appService.activeCategory);
    },
          error => {
            this.appService.MyErrorHandler(error);
          }
    );
  }
  onCreate(){
    this.router.navigate(['/students/create']);
  }
  onEdit(id: string){

    this.router.navigate(['/students/edit/' +id]);
  }
  onDelete(id: string){
    this.studentsService.DeleteRecords(id);

  }

}


