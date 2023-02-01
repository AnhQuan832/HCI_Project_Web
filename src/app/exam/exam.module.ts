import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShareModule } from '../share/app-share.module';

import { ExamRoutingModule } from './exam-routing.module';

import { ExamComponent } from './exam/exam.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { QuestionComponent } from './question/question.component';
import { ExamReviewComponent } from './exam-review/exam-review.component';

import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TableModule } from 'primeng/table';
import { DataViewModule } from 'primeng/dataview';
@NgModule({
  imports: [
    CommonModule,
    ExamRoutingModule,
    AppShareModule,
    BreadcrumbModule,
    TableModule,
    DataViewModule
  ],
  declarations: [
    ExamComponent,
    ConfirmComponent,
    QuestionComponent,
    ExamReviewComponent
  ]
})
export class ExamModule { }
