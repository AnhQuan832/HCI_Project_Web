import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InputSwitchModule} from 'primeng/inputswitch';
import { InputTextModule} from 'primeng/inputtext';

import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    InputSwitchModule,
    InputTextModule,
    FontAwesomeModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    NavbarComponent
  ],
  exports: [
    HeaderComponent,
    NavbarComponent
  ]
})
export class AppShareModule {

 }
