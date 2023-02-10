import { Component, OnInit } from '@angular/core';
import { 
  faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {};

  ngOnInit(): void {};

  faUserGraduate = faUserGraduate;

  toLesson(){
    this.router.navigateByUrl("/main/lesson");
  }

}
