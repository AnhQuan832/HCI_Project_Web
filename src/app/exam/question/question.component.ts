import { Component, OnInit } from '@angular/core';

import { ExamData } from './exam-data';
import { IQuestion } from './Iquestion';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.less']
})
export class QuestionComponent implements OnInit {

  examData: ExamData = new ExamData();

  questionsNum = new Array<IQuestion>(50);

  constructor() { }

  ngOnInit() {
    this.questionsNum = this.examData.questions;
    console.log(this.questionsNum);
  }

}
