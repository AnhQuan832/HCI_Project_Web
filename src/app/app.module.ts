import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule} from 'primeng/button';
import { InputSwitchModule} from 'primeng/inputswitch';
import { InputTextModule} from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [		
    AppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ButtonModule,
    InputSwitchModule,
    InputTextModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
