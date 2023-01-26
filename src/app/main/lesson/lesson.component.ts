import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.less']
})
export class LessonComponent implements OnInit {

  subjects = [
    {
      title: "Toán Học",
      class: "math"
    },
    {
      title: "Ngữ Văn",
      class: "lit"
    },
    {
      title: "Ngoại Ngữ",
      class: "forlan"
    },
    {
      title: "Vật Lý",
      class: "phys"
    },
    {
      title: "Hóa Học",
      class: "chem"
    },
    {
      title: "Sinh Học",
      class: "bio"
    },
    {
      title: "Lịch Sử",
      class: "hist"
    },
    {
      title: "Địa Lý",
      class: "geo"
    },
    {
      title: "GDCD",
      class: "socedu"
    },
    {
      title: "Lý-Hóa-Sinh",
      class: "natu"
    },
    {
      title: "Sử-Địa-GDCD",
      class: "soci"
    },
  ]

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
  },
  {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
  },
  {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
  }
  ];

  recentStudied = [
    {
      subject: "Toán Học",
      class: "math",
      chapter: "Chương 1",
      no: "Bài 3",
      title: "Đường tròn lượng giác",
      description: "Vòng tròn lượng giác là đường tròn đơn vị tâm O bán kính 1, định hướng ..."
    },
    {
      subject: "Văn Học",
      class: "lit",
      chapter: "Tuần 21",
      no: "Bài 1",
      title: "Vợ Nhặt-Kim Lân",
      description: "Nội dung của bài học Vợ nhặt của Kim Lân giúp các em hiểu được tình cảnh thê thảm của người nông dân..."
    },
    {
      subject: "Ngoại Ngữ",
      class: "forlan",
      chapter: "Unit 1",
      no: "Reading",
      title: "Home Life",
      description: "Hãy đọc bài dịch sau: ..."
    },
    {
      subject: "GDCD",
      class: "socedu",
      chapter: "Học Kì 1",
      no: "Bài 1",
      title: "Pháp luật và đời sống",
      description: "Với bài học này, về kiến thức các em cần nắm được khái niệm, bản chất của pháp luật với đời sống của cá nhân, ..."
    }
  ];

  sortOrder = 1;
  sortOptions = [
    "Toán Học",
    "Văn Học",
    "Ngoại Ngữ",
    "GDCD"
  ];
  selectedOptions = "";
  sortField = "";

  constructor() { }

  ngOnInit() {
    
  }

}
