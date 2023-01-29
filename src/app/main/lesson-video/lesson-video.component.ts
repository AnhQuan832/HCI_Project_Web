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

  newNoteContent = "";
  modifyNoteContent = "";
  modifyingNote = -1;

  visible: boolean = true;
  visibleBottomBarAdd = false;
  visibleBottomBarModify = false
  

  notes = [
    {
      sec_num: 1805,
      timeText:"30:05",
      content: "Phúc đẹp trai quá nhưng mà câu từ không đủ để diễn tả nỗi vẽ đẹp trai này nên không thể viết được dài hơn chỉ viết được tới đây thôi"
    },
    {
      sec_num: 1606,
      timeText:"26:46",
      content: "Phúc giỏi quá"
    },
  ];
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
    let time = (this.video.currentTime).toString();
    let sec_num = parseInt(time, 10);
    let hours = Math.floor(sec_num /3600);
    let minutes = Math.floor((sec_num - (hours * 3600))/60);
    let seconds = sec_num - (hours * 3600) - (minutes * 60);

    let mins_text = "";
    let sec_text = "";

    minutes < 10 ? (mins_text = "0" + minutes.toString()) : (mins_text = minutes.toString());
    seconds < 10 ? (sec_text = "0" + seconds.toString()) : (sec_text = seconds.toString());

    if (hours == 0){
      (document.getElementById("add-note-btn") as HTMLButtonElement).innerHTML = "Thêm ghi chú: " + mins_text + ":" + sec_text;
    }
  }

  setVideoTime(time: number){
    this.video.currentTime = time;
    this.video.pause();

    this.video.scrollIntoView();
  }

  addNote(){
    this.newNoteContent = "";

    this.visibleBottomBarAdd = true;
  }

  refreshTable(){
    this.visible = false;
    setTimeout(() => this.visible = true, 0);
  }

  confirmAddNote(){
    let finalTime = "";
    let finalTimeText = "";

    finalTime = (this.video.currentTime).toString();
    let sec = parseInt(finalTime, 10);
    let hours = Math.floor(sec /3600);
    let minutes = Math.floor((sec - (hours * 3600))/60);
    let seconds = sec - (hours * 3600) - (minutes * 60);

    let mins_text = "";
    let sec_text = "";

    minutes < 10 ? (mins_text = "0" + minutes.toString()) : (mins_text = minutes.toString());
    seconds < 10 ? (sec_text = "0" + seconds.toString()) : (sec_text = seconds.toString());

    finalTimeText = mins_text + ":" + sec_text;

    this.notes.push({
      sec_num: parseInt(finalTime),
      timeText: finalTimeText,
      content: (this.newNoteContent).slice(3, -4)
    });

    this.refreshTable();
    this.visibleBottomBarAdd = false;
  }

  deleteNote(deleteNote: any){
    let found = this.notes.findIndex((note) => {
      return note == deleteNote;
    })

    this.notes.splice(found, 1);
    this.refreshTable();
  }

  modifyNote(modifyNote: any){
    let found = this.notes.findIndex((note) => {
      return note == modifyNote;
    })

    this.modifyNoteContent = this.notes[found].content;
    this.modifyingNote = found;
    this.visibleBottomBarModify = true;
  }

  confirmModifyNote(){
    this.notes[this.modifyingNote].content = this.modifyNoteContent.slice(3, -4);

    this.refreshTable();
    this.visibleBottomBarModify = false;
  }
}
