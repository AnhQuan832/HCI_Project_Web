import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MockTestComponent } from './mock-test/mock-test.component';
import { LandingComponent } from './landing/landing.component';
import { LessonComponent } from './lesson/lesson.component';
import { ReviewComponent } from './review/review.component';
import { StatisticComponent } from './statistic/statistic.component';
import { LessonVideoComponent } from './lesson-video/lesson-video.component';

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
        path: 'lesson-video',
        component: LessonVideoComponent
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
