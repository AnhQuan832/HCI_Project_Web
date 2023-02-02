import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-exam-result',
  templateUrl: './exam-result.component.html',
  styleUrls: ['./exam-result.component.less']
})
export class ExamResultComponent implements OnInit {

  breadcrumbs: MenuItem[];

  visible = true;

  examHistory = [
    {
      date: "18/05/2020",
      time: "45:03",
      correct: "39",
      grade: "7.8"
    },
    {
      date: "16/06/2020",
      time: "48:30",
      correct: "43",
      grade: "8.6"
    },
    {
      date: "23/06/2021",
      time: "30:12",
      correct: "50",
      grade: "10"
    },
  ];

  constructor() {
    this.breadcrumbs = [
      {label: 'Danh sách bài thi thử', routerLink: "/main/mock-test"},
      {label: 'Đề thi THPT Quốc Gia - 2020'},
    ];
   }

  ngOnInit() {
  }

}
