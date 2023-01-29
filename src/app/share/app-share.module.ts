import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LessonHeaderComponent } from './lesson-header/lesson-header.component';
import { InputSwitchModule} from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { SlideMenuModule } from 'primeng/slidemenu';
import {ButtonModule} from 'primeng/button';


import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    InputSwitchModule,
    InputTextModule,
    FontAwesomeModule,
    RouterModule,
    SlideMenuModule,
    ButtonModule
  ],
  declarations: [
    HeaderComponent,
    NavbarComponent,
    LessonHeaderComponent
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    LessonHeaderComponent
  ]
})
export class AppShareModule {

 }
