import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-lesson-video',
  templateUrl: './lesson-video.component.html',
  styleUrls: ['./lesson-video.component.less']
})
export class LessonVideoComponent implements OnInit {

  breadcrumbs: MenuItem[];

  video: HTMLVideoElement = document.getElementById('video') as HTMLVideoElement;

  constructor() {
    this.breadcrumbs = [
      {label: 'Bài học', routerLink: "/main/lesson"},
      {label: 'Bài 1: Phương trình lượng giác'},
    ];
  }

  ngOnInit() {
    this.video = document.getElementById('video') as HTMLVideoElement;

    this.video.addEventListener('timeupdate', (event) =>{
      this.setTimeStamp();
    })
  }

  setTimeStamp(){
    (document.getElementById("test-btn") as HTMLButtonElement).innerHTML = (this.video.currentTime).toString();
  }

}
