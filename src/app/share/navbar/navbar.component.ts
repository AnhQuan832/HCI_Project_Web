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

  ngOnInit() {
    this.retrieveSelectedNav();
  }

  retrieveSelectedNav(){
    let selected = localStorage.getItem('selected_nav');
    
    if (selected == "0"){
      this.selected_nav = [true, false, false, false];
    }
    else if (selected == "1"){
      this.selected_nav = [false, true, false, false];
    }
    else if (selected == "2"){
      this.selected_nav = [false, false, true, false];
    }
    else {this.selected_nav = [false, false, false, true];}
  }

  reset_selected(){
    this.selected_nav[0] = false;
    this.selected_nav[1] = false;
    this.selected_nav[2] = false;
    this.selected_nav[3] = false;
  }

  select_first(){
    this.reset_selected();
    this.selected_nav[0] = true;
    localStorage.setItem('selected_nav', "0");
  }

  select_second(){
    this.reset_selected();
    this.selected_nav[1] = true;
    localStorage.setItem('selected_nav', "1")
  }

  select_third(){
    this.reset_selected();
    this.selected_nav[2] = true;
    localStorage.setItem('selected_nav', "2")
  }

  select_fourth(){
    this.reset_selected();
    this.selected_nav[3] = true;
    localStorage.setItem('selected_nav', "3")
  }
}
