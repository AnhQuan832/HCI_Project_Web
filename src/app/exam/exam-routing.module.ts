import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfirmComponent } from './confirm/confirm.component';
import { ExamComponent } from './exam/exam.component';

const routes: Routes = [
  {
    path: '',
    component: ExamComponent,
    children:[
      {
        path: "confirm",
        component: ConfirmComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamRoutingModule { }
