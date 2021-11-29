import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { CoursesService } from './courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  err:string = "";
  title:string = "";
  constructor(public appService: AppService,private router: Router,
    private coursesService: CoursesService) { }

    ngOnInit(): void {

       this.coursesService.GetCourses();

  }
  onCreate(){
    this.router.navigate(['/courses/create']);
  }
  onEdit(id:string){
    this.router.navigate(['/courses/edit/' +id]);
  }

  onDelete(id:string){
    this.coursesService.DeleteCourse(id);
  }
}
