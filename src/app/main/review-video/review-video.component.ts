import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { IQuestion } from 'src/app/exam/Iquestion';
import { ExamData } from 'src/app/exam/question/exam-data';

@Component({
  selector: 'app-review-video',
  templateUrl: './review-video.component.html',
  styleUrls: ['./review-video.component.less']
})
export class ReviewVideoComponent implements OnInit {
  breadcrumbs: MenuItem[];

  newNoteContent = "";
  modifyNoteContent = "";
  modifyingNote = -1;

  visible: boolean = true;

  examData: ExamData = new ExamData();
  first = 0;

  questionsNum = new Array<IQuestion>(50);
  questionsNum1 = new Array<IQuestion>(50);

  constructor() {
    this.breadcrumbs = [
      {label: 'Ứng dụng', routerLink: "/main/review"},
      {label: 'Bài 1: Phương trình lượng giác'},
    ];
  }

  ngOnInit() {
    this.questionsNum = this.examData.solutionQuestions;
    this.questionsNum1 = this.examData.questionsReview;
  }

  setVideoTime(time: number){
    let video = document.getElementById('video') as HTMLVideoElement;

    video.currentTime = time;

    video.scrollIntoView();
  }

  refreshTable(){
    this.visible = false;
    setTimeout(() => this.visible = true, 0);
  }
}
