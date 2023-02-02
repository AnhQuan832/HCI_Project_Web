import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ExamData } from './exam-data';
import { IQuestion } from '../Iquestion';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.less']
})
export class QuestionComponent implements OnInit {

  examData: ExamData = new ExamData();

  questionsNum = new Array<IQuestion>(50);

  first = 0;

  sec_left = 7200;

  constructor(
    private router: Router) {}

  ngOnInit() {
    this.questionsNum = this.examData.questions;
    setTimeout(() => {
      this.setTimeLimit();
    }, 10);
    setTimeout(() => {
      setInterval(this.setTimeLeft, 1000, this.router);
    }, 10)
  }

  setTimeLimit(){
    let sec_num = this.sec_left;
    let hours = Math.floor(sec_num /3600);
    let minutes = Math.floor((sec_num - (hours * 3600))/60);
    let seconds = sec_num - (hours * 3600) - (minutes * 60);

    let hours_text = "";
    let mins_text = "";
    let sec_text = "";

    hours_text = hours < 10 ? ("0" + hours.toString()) : (hours.toString());
    mins_text = minutes < 10 ? ("0" + minutes.toString()) : (minutes.toString());
    sec_text = seconds < 10 ? ("0" + seconds.toString()) : (seconds.toString());

    (document.getElementById("time-left") as HTMLDivElement).innerHTML = hours_text + ":" + mins_text + ":" + sec_text;
  }

  setTimeLeft(router: any){
    let time_text = (document.getElementById('time-left') as HTMLDivElement).innerHTML;

    let hours_text = time_text.split(":")[0];
    let mins_text = time_text.split(":")[1];
    let sec_text = time_text.split(":")[2];

    let sec_num = (parseInt(hours_text) * 3600 + parseInt(mins_text) * 60 + parseInt(sec_text)) - 1;

    let hours = Math.floor(sec_num /3600);
    let minutes = Math.floor((sec_num - (hours * 3600))/60);
    let seconds = sec_num - (hours * 3600) - (minutes * 60);

    hours_text = "";
    mins_text = "";
    sec_text = "";

    hours_text = hours < 10 ? ("0" + hours.toString()) : (hours.toString());
    mins_text = minutes < 10 ? ("0" + minutes.toString()) : (minutes.toString());
    sec_text = seconds < 10 ? ("0" + seconds.toString()) : (seconds.toString());

    (document.getElementById("time-left") as HTMLDivElement).innerHTML = hours_text + ":" + mins_text + ":" + sec_text;

    if (sec_num < 0){
      router.navigateByUrl("/exam/exam-review");
    }
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
    this.router.navigateByUrl("/exam/exam-review");
  }
}
