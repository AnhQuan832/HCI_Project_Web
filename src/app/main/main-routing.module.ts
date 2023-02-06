import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MockTestComponent } from './mock-test/mock-test.component';
import { LandingComponent } from './landing/landing.component';
import { LessonComponent } from './lesson/lesson.component';
import { ReviewComponent } from './review/review.component';
import { StatisticComponent } from './statistic/statistic.component';
import { LessonVideoComponent } from './lesson-video/lesson-video.component';
import { ReviewVideoComponent } from './review-video/review-video.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children:[
      {
        path: 'lesson',
        component: LessonComponent
      },
      {
        path: 'mock-test',
        component: MockTestComponent
      },
      {
        path: 'review',
        component: ReviewComponent
      },
      {
        path: 'statistic',
        component: StatisticComponent
      }
    ]
  },
  {
    path: 'lesson-video',
    component: LessonVideoComponent
  },
  {
    path: 'review-video',
    component: ReviewVideoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
