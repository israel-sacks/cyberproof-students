import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-createrec',
  templateUrl: './createrec.component.html',
  styleUrls: ['./createrec.component.css']
})
export class CreateRecComponent implements OnInit {
  createRecForm: FormGroup;
  selectedValue = -1;
  constructor(public appService: AppService,private studentsService: StudentsService,
    private router: Router) { }

  ngOnInit(): void {
    this.createRecForm = new FormGroup({
        'StudentName': new FormControl(null, Validators.required),
        'CourseId': new FormControl(null,Validators.required),
        'Marks': new FormControl(null, [Validators.max(100),
          Validators.min(0),Validators.required]),
    });
  }
  onCreate(){
    this.studentsService.CreateRecord(this.createRecForm.get('StudentName').value,
                          this.createRecForm.get('CourseId').value,
                          this.createRecForm.get('Marks').value);
  }
  onCancel(){
    this.router.navigate(['/students']);
  }
}
