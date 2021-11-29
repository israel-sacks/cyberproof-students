import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { StudentsService } from '../students.service';
import { Student } from './../student.model';

@Component({
  selector: 'app-editrec',
  templateUrl: './editrec.component.html',
  styleUrls: ['./editrec.component.css']
})
export class EditRecComponent implements OnInit {
  editRecForm: FormGroup;
  student: Student;
  id: string;
  constructor(public appService: AppService,private studentsService: StudentsService,
    private Route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id = this.Route.snapshot.params['id'];
    this.editRecForm = new FormGroup({
          'id': new FormControl(null),
          'StudentName': new FormControl(null, Validators.required),
          'CourseId': new FormControl(null, Validators.required),
          'Marks': new FormControl(null,[Validators.required,Validators.max(100),
            Validators.min(0)])
      });
    this.studentsService.GetRecord(this.id)
    .subscribe(
      record => {
        this.student = record;
        this.editRecForm.setValue({
          'id': this.student.id,
          'StudentName': this.student.StudentName,
          'CourseId': this.student.CourseId,
          'Marks': this.student.Marks
        });
    },   
    error => {
      this.appService.MyErrorHandler(error)})
    
  }
  onUpdate(){
    this.studentsService.UpdateRecord(this.editRecForm.get('id').value,
                          this.editRecForm.get('StudentName').value,
                          this.editRecForm.get('CourseId').value,
                          this.editRecForm.get('Marks').value);
  }
  onCancel(){
    this.router.navigate(['/students']);
  }
}
