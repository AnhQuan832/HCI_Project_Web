import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.less']
})
export class LessonComponent implements OnInit {

  myFormGroup = new FormGroup(
    {filterDropdown: new FormControl()}
    );

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
    }
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

  lessonList = [
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
    },
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
    },
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
    },
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
    },
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

  allLesson = [
    {
      subject: "Toán Học",
      class: "math",
      chapter: "Chương 1",
      no: "Bài 3",
      title: "Đường tròn lượng giác",
      description: "Vòng tròn lượng giác là đường tròn đơn vị tâm O bán kính 1, định hướng ..."
    }
  ];

  sortOrder = 1;
  sortOptions = [
    {label: "Toán Học", value: "math"},
    {label: "Văn Học", value: "lit"},
    {label: "Ngoại Ngữ", value: "forlan"},
    {label: "Vật Lý", value: "phys"},
    {label: "Hóa Học", value: "chem"},
    {label: "Sinh Học", value: "bio"},
    {label: "Lịch Sử", value: "hist"},
    {label: "Địa Lý", value: "geo"},
    {label: "GDCD", value: "socedu"}
  ];
  sortField = "";

  showFilters = true;

  constructor() { }

  ngOnInit() {
    this.assignAllLesson();
  }

  assignAllLesson(){
    this.allLesson.splice(0);
    this.lessonList.forEach(lesson => this.allLesson.push(Object.assign({}, lesson)));
  }

  scrollToAllLesson(subject: string){
    document.getElementById('allLesson')?.scrollIntoView();
    this.setValueFilter(subject)
  }

  updateFilter(subject: string){
    this.assignAllLesson();
    this.allLesson = this.allLesson.filter(lesson => lesson.class == subject);
  }

  clearFilters(filterDropdown: any){
    filterDropdown.clear();
    this.assignAllLesson();
  }

  setValueFilter(subject: string){
    this.myFormGroup.get(['filterDropdown'])?.setValue(subject);
    this.updateFilter(subject);
  }
}
