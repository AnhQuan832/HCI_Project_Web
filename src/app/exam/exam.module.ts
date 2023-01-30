import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShareModule } from '../share/app-share.module';

import { ExamRoutingModule } from './exam-routing.module';

import { ExamComponent } from './exam/exam.component';
import { ConfirmComponent } from './confirm/confirm.component';
@NgModule({
  imports: [
    CommonModule,
    ExamRoutingModule,
    AppShareModule
  ],
  declarations: [
    ExamComponent,
    ConfirmComponent
  ]
})
export class ExamModule { }
