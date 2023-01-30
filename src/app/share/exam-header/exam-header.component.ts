import { Component, OnInit } from '@angular/core';


import { 
  faUserGraduate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-exam-header',
  templateUrl: './exam-header.component.html',
  styleUrls: ['./exam-header.component.less']
})
export class ExamHeaderComponent implements OnInit {

  faUserGraduate = faUserGraduate;

  constructor() { }

  ngOnInit() {
  }

}
