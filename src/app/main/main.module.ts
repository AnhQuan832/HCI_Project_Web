import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShareModule } from '../share/app-share.module';

import { MainRoutingModule } from './main-routing.module';

import { MockTestComponent } from './mock-test/mock-test.component';
import { LandingComponent } from './landing/landing.component';
import { LessonComponent } from './lesson/lesson.component';
import { ReviewComponent } from './review/review.component';
import { StatisticComponent } from './statistic/statistic.component';
import {CarouselModule} from 'primeng/carousel';
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';
import { InputSwitchModule} from 'primeng/inputswitch';
import { InputTextModule} from 'primeng/inputtext';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    AppShareModule,
    CarouselModule,
    DataViewModule,
    DropdownModule,
    FormsModule,
    InputSwitchModule,
    InputTextModule
  ],
  declarations: [
    LandingComponent,
    MockTestComponent,
    LessonComponent,
    ReviewComponent,
    StatisticComponent
  ]
})
export class MainModule { }
