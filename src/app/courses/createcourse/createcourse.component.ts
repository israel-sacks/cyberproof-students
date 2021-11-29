import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-createcourse',
  templateUrl: './createcourse.component.html',
  styleUrls: ['./createcourse.component.css']
})
export class CreateCourseComponent implements OnInit {
  createCourseForm: FormGroup;
  constructor( private coursesService: CoursesService,private router: Router) { }

  ngOnInit(): void {
    this.createCourseForm = new FormGroup({
   
        'CourseName': new FormControl(null, Validators.required),
   
    });
  }
  onCreate(){
    this.coursesService.CreateCourse(this.createCourseForm.get('CourseName').value);
  }
  onCancel(){
    this.router.navigate(['/courses']);
  }

}
