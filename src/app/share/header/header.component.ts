import { Component, OnInit } from '@angular/core';
import { 
  faUserGraduate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  constructor() {};

  ngOnInit(): void {};

  faUserGraduate = faUserGraduate;

}
