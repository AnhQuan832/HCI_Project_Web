import { Component } from '@angular/core';
import { faBookOpen,
  faSquareCheck,
  faUserGraduate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  faUserGraduate = faUserGraduate;

}
