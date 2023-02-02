import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfirmComponent } from './confirm/confirm.component';
import { ExamResultComponent } from './exam-result/exam-result.component';
import { ExamReviewComponent } from './exam-review/exam-review.component';
import { ExamComponent } from './exam/exam.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
  {
    path: '',
    component: ExamComponent,
    children:[
      {
        path: "confirm",
        component: ConfirmComponent
      },
      {
        path: "question",
        component: QuestionComponent
      },
      {
        path: "exam-result",
        component: ExamResultComponent
      },
      {
        path: "exam-review",
        component: ExamReviewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamRoutingModule { }
