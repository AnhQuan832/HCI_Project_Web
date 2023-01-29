import { Component } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {InputSwitchModule} from 'primeng/inputswitch';
import { faBookOpen,
faSquareCheck,
faBook,
faChartSimple } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {
  loading = [false, false, false, false];

  faBookOpen = faBookOpen;
  faSquareCheck = faSquareCheck;
  faBook = faBook;
  faChartSimple = faChartSimple;

  selected_nav = [true, false, false, false];

  reset_selected(){
    this.selected_nav[0] = false;
    this.selected_nav[1] = false;
    this.selected_nav[2] = false;
    this.selected_nav[3] = false;
  }

  select_first(){
    this.reset_selected();
    this.selected_nav[0] = true;
  }

  select_second(){
    this.reset_selected();
    this.selected_nav[1] = true;
  }

  select_third(){
    this.reset_selected();
    this.selected_nav[2] = true;
  }

  select_fourth(){
    this.reset_selected();
    this.selected_nav[3] = true;
  }
}
