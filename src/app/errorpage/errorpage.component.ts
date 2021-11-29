import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Data } from '@angular/router';

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.css']
})
export class ErrorPageComponent implements OnInit {
  Title: string;
  Message: string;
  constructor( private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.data.subscribe( 
      (data: Data) => {
        this.Message = data['message'];
      }
    );
    this.Message=this.route.snapshot.queryParams['message'];
    this.Title=this.route.snapshot.queryParams['title'];
  }

}
