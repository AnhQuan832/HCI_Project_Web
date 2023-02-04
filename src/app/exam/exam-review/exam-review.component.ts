import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IQuestion } from '../Iquestion';
import { ExamData } from '../question/exam-data';
@Component({
  selector: 'app-exam-review',
  templateUrl: './exam-review.component.html',
  styleUrls: ['./exam-review.component.less']
})
export class ExamReviewComponent implements OnInit {

  examData: ExamData = new ExamData();

  questionsNum = new Array<IQuestion>(50);

  first = 0;

  sec_left = 7200;

  difficultyView = false;

  constructor(
    private router: Router) {}

  ngOnInit() {
    this.questionsNum = this.examData.questionsReview;
  }

  scrollToAnswer(id: string){
    if ( parseInt(id) % 5 != 0){
      this.first = 5 * Math.floor(parseInt(id) / 5);
    }
    else{
      this.first = 5 * Math.floor(parseInt(id) / 5) - 5;
    }
    
    console.log(this.first);
    setTimeout(() => {
      document.getElementById('answer' + id)?.scrollIntoView();
    }, 10);
  }

  submitExam(){
    this.router.navigateByUrl("/exam/exam-result");
  }

}
