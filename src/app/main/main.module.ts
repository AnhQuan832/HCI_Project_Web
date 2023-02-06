import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShareModule } from '../share/app-share.module';

import { MainRoutingModule } from './main-routing.module';

import { MockTestComponent } from './mock-test/mock-test.component';
import { LandingComponent } from './landing/landing.component';
import { LessonComponent } from './lesson/lesson.component';
import { ReviewComponent } from './review/review.component';
import { StatisticComponent } from './statistic/statistic.component';
import { LessonVideoComponent } from './lesson-video/lesson-video.component';
import { ReviewVideoComponent } from './review-video/review-video.component';

import { CarouselModule} from 'primeng/carousel';
import { DataViewModule} from 'primeng/dataview';
import { DropdownModule} from 'primeng/dropdown';
import { FormsModule} from '@angular/forms';
import { InputSwitchModule} from 'primeng/inputswitch';
import { InputTextModule} from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { EditorModule } from 'primeng/editor';
import { SidebarModule } from 'primeng/sidebar';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { MultiSelectModule } from 'primeng/multiselect';
import { ChartModule } from 'primeng/chart';
import { RadioButtonModule } from 'primeng/radiobutton';


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
    InputTextModule,
    ReactiveFormsModule,
    MenuModule,
    BreadcrumbModule,
    TabViewModule,
    TableModule,
    EditorModule,
    SidebarModule,
    ConfirmPopupModule,
    ToastModule,
    MultiSelectModule,
    ChartModule,
    RadioButtonModule
  ],
  declarations: [
    LandingComponent,
    MockTestComponent,
    LessonComponent,
    ReviewComponent,
    StatisticComponent,
    LessonVideoComponent,
    ReviewVideoComponent
  ]
})
export class MainModule { }
