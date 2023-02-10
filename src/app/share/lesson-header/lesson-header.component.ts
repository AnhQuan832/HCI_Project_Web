import { Component, OnInit } from '@angular/core';
import { 
  faUserGraduate 
} from '@fortawesome/free-solid-svg-icons';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson-header',
  templateUrl: './lesson-header.component.html',
  styleUrls: ['./lesson-header.component.less']
})
export class LessonHeaderComponent implements OnInit {

  items = [
    {
      label:'Giải tích',
      icon:'pi pi-fw pi-chart-bar',
      items:
      [
        {
        label:'Chương 1',
        icon:'pi pi-fw pi-book',
        items:[
            {
              label:'Bài 1: Đường tròn lượng giác',
              icon:'pi pi-file-o'
            },
            {
              label:'Bài 2: Cực trị của hàm số',
              icon:'pi pi-file-o'
            },
            {
              label:'Bài 3: Giá trị lớn nhất và nhỏ nhất của hàm số',
              icon:'pi pi-file-o'
            }
        ]
        },
        {
          label:'Chương 2',
          icon:'pi pi-fw pi-book',
          items:[
            {
              label:'Bài 1: Đường tròn lượng giác',
              icon:'pi pi-file-o'
            },
            {
              label:'Bài 2: Cực trị của hàm số',
              icon:'pi pi-file-o'
            },
            {
              label:'Bài 3: Giá trị lớn nhất và nhỏ nhất của hàm số',
              icon:'pi pi-file-o'
            }
          ]
        },
        {
          label:'Chương 3',
          icon:'pi pi-fw pi-book',
          items:[
            {
              label:'Bài 1: Đường tròn lượng giác',
              icon:'pi pi-file-o'
            },
            {
              label:'Bài 2: Cực trị của hàm số',
              icon:'pi pi-file-o'
            },
            {
              label:'Bài 3: Giá trị lớn nhất và nhỏ nhất của hàm số',
              icon:'pi pi-file-o'
            }   
          ]
        },
        {
          label:'Chương 4',
          icon:'pi pi-fw pi-book',
          items:[
            {
              label:'Bài 1: Đường tròn lượng giác',
              icon:'pi pi-file-o'
            },
            {
              label:'Bài 2: Cực trị của hàm số',
              icon:'pi pi-file-o'
            },
            {
              label:'Bài 3: Giá trị lớn nhất và nhỏ nhất của hàm số',
              icon:'pi pi-file-o'
            } 
          ]
        },
        {
          separator:true
        }
      ]
    },
    {
      label:'Hình Học',
      icon:'pi pi-fw pi-box',
      items:
      [
        {
          label:'Chương 1',
          icon:'pi pi-fw pi-book',
          items:[
            {
              label:'Bài 1: Ôn tập quan hệ vuông góc lớp 11',
              icon:'pi pi-file-o'
            },
            {
              label:'Bài 2: Thể tích khối chóp',
              icon:'pi pi-file-o'
            },
            {
              label:'Bài 3: Thể tích khối lăng trụ',
              icon:'pi pi-file-o'
            } 
          ]
        },
        {
          label:'Chương 2',
          icon:'pi pi-fw pi-book',
          items:[
            {
              label:'Bài 1: Ôn tập quan hệ vuông góc lớp 11',
              icon:'pi pi-file-o'
            },
            {
              label:'Bài 2: Thể tích khối chóp',
              icon:'pi pi-file-o'
            },
            {
              label:'Bài 3: Thể tích khối lăng trụ',
              icon:'pi pi-file-o'
            } 
          ]
        },
        {
          label:'Chương 3',
          icon:'pi pi-fw pi-book',
          items:[
            {
              label:'Bài 1: Ôn tập quan hệ vuông góc lớp 11',
              icon:'pi pi-file-o'
            },
            {
              label:'Bài 2: Thể tích khối chóp',
              icon:'pi pi-file-o'
            },
            {
              label:'Bài 3: Thể tích khối lăng trụ',
              icon:'pi pi-file-o'
            } 
          ]
        },
        {
          label:'Chương 4',
          icon:'pi pi-fw pi-book',
          items:[
            {
              label:'Bài 1: Ôn tập quan hệ vuông góc lớp 11',
              icon:'pi pi-file-o'
            },
            {
              label:'Bài 2: Thể tích khối chóp',
              icon:'pi pi-file-o'
            },
            {
              label:'Bài 3: Thể tích khối lăng trụ',
              icon:'pi pi-file-o'
            } 
          ]
        },
        {
          separator:true
        }
      ]
    }
  ];

  constructor(private router: Router) {};

  ngOnInit() {
  }

  faUserGraduate = faUserGraduate;
  toLesson(){
    this.router.navigateByUrl("/main/lesson");
  }

}
