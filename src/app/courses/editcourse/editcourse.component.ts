import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../course.model';
import { CoursesService } from '../courses.service';


@Component({ 
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.css']
})
export class EditCourseComponent implements OnInit {
  editCourseForm: FormGroup;
  course: Course;
  id: string;
  constructor(private coursesService: CoursesService,
    private Route: ActivatedRoute,private router: Router) { }

    ngOnInit() {
    this.id = this.Route.snapshot.params['id'];
    this.editCourseForm = new FormGroup({
        'id': new FormControl(),
        'CourseName': new FormControl(null, Validators.required)
      });
      this.coursesService.GetCourse(this.id)
        .subscribe((record:Course)=>{
          this.editCourseForm.setValue({
              'id':record.id,
              'CourseName': record.CourseName
            })
        },
        (error)=>{
          const msg =(error.massage||error["url"]||error)
          this.router.navigate(['/ErrorPage'],
                  {queryParams: {message: msg, title:error.status }});
            }
        ) 
  }
  onUpdate(){
    this.coursesService.UpdateCourse(this.editCourseForm.get('id').value,
                          this.editCourseForm.get('CourseName').value);
  }
  onCancel(){
    this.router.navigate(['/courses']);
  }

}