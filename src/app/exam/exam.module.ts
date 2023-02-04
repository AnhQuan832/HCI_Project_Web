import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShareModule } from '../share/app-share.module';

import { ExamRoutingModule } from './exam-routing.module';

import { ExamComponent } from './exam/exam.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { QuestionComponent } from './question/question.component';
import { ExamReviewComponent } from './exam-review/exam-review.component';
import { ExamResultComponent } from './exam-result/exam-result.component';

import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TableModule } from 'primeng/table';
import { DataViewModule } from 'primeng/dataview';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ScrollTopModule } from 'primeng/scrolltop';
import { PaginatorModule } from 'primeng/paginator';
import { InputSwitchModule } from 'primeng/inputswitch';
@NgModule({
  imports: [
    CommonModule,
    ExamRoutingModule,
    AppShareModule,
    BreadcrumbModule,
    TableModule,
    DataViewModule,
    RadioButtonModule,
    ReactiveFormsModule,
    FormsModule,
    ScrollTopModule,
    PaginatorModule,
    InputSwitchModule
  ],
  declarations: [
    ExamComponent,
    ConfirmComponent,
    QuestionComponent,
    ExamResultComponent,
    ExamReviewComponent
  ]
})
export class ExamModule { }
