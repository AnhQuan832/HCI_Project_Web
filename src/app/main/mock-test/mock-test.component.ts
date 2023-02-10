import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mock-test',
  templateUrl: './mock-test.component.html',
  styleUrls: ['./mock-test.component.less']
})
export class MockTestComponent implements OnInit {

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
    },
    {
      title: "Lý-Hóa-Sinh",
      class: "natu"
    },
    {
      title: "Sử-Địa-GDCD",
      class: "soci"
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

  examList = [
    {
      subject: "Toán Học",
      class: "math",
      duration: "120 phút",
      content: "Toàn bộ chương trình toán 12",
      title: "Đề thi THPTQG",
      year: "2020",
      unit: "Bộ GD & ĐT"
    },
    {
      subject: "Địa lý",
      class: "geo",
      duration: "50 phút",
      content: "Toàn bộ chương trình địa lý 12",
      title: "Đề thi HKII",
      year: "2020/2021",
      unit: "Trường THPT Thủ Đức"
    },
    {
      subject: "Sử-Địa-GDCD",
      class: "soci",
      duration: "150 phút",
      content: "Toàn bộ chương trình lịch sử, địa lý và GDCD 12",
      title: "Đề thi THPT Quốc Gia",
      year: "2019",
      unit: "Bộ GD & ĐT"
    },
    {
      subject: "Toán Học",
      class: "math",
      duration: "120 phút",
      content: "Toàn bộ chương trình toán 12",
      title: "Đề thi THPTQG",
      year: "2020",
      unit: "Bộ GD & ĐT"
    },
    {
      subject: "Địa lý",
      class: "geo",
      duration: "50 phút",
      content: "Toàn bộ chương trình địa lý 12",
      title: "Đề thi HKII",
      year: "2020/2021",
      unit: "Trường THPT Thủ Đức"
    },
    {
      subject: "Sử-Địa-GDCD",
      class: "soci",
      duration: "150 phút",
      content: "Toàn bộ chương trình lịch sử, địa lý và GDCD 12",
      title: "Đề thi THPT Quốc Gia",
      year: "2019",
      unit: "Bộ GD & ĐT"
    },
    {
      subject: "Toán Học",
      class: "math",
      duration: "120 phút",
      content: "Toàn bộ chương trình toán 12",
      title: "Đề thi THPTQG",
      year: "2020",
      unit: "Bộ GD & ĐT"
    },
    {
      subject: "Lý-Hóa-Sinh",
      class: "natu",
      duration: "150 phút",
      content: "Toàn bộ chương trình Toán, Hóa, Sinh 12",
      title: "Đề thi THPT Quốc Gia",
      year: "2019",
      unit: "Bộ GD & ĐT"
    },
    {
      subject: "Địa lý",
      class: "geo",
      duration: "50 phút",
      content: "Toàn bộ chương trình địa lý 12",
      title: "Đề thi HKII",
      year: "2020/2021",
      unit: "Trường THPT Thủ Đức"
    },
    {
      subject: "Sử-Địa-GDCD",
      class: "soci",
      duration: "150 phút",
      content: "Toàn bộ chương trình lịch sử, địa lý và GDCD 12",
      title: "Đề thi THPT Quốc Gia",
      year: "2019",
      unit: "Bộ GD & ĐT"
    },
    {
      subject: "Lý-Hóa-Sinh",
      class: "natu",
      duration: "150 phút",
      content: "Toàn bộ chương trình Toán, Hóa, Sinh 12",
      title: "Đề thi THPT Quốc Gia",
      year: "2019",
      unit: "Bộ GD & ĐT"
    },
    {
      subject: "Toán Học",
      class: "math",
      duration: "120 phút",
      content: "Toàn bộ chương trình toán 12",
      title: "Đề thi THPTQG",
      year: "2020",
      unit: "Bộ GD & ĐT"
    },
    {
      subject: "Địa lý",
      class: "geo",
      duration: "50 phút",
      content: "Toàn bộ chương trình địa lý 12",
      title: "Đề thi HKII",
      year: "2020/2021",
      unit: "Trường THPT Thủ Đức"
    },
    {
      subject: "Lý-Hóa-Sinh",
      class: "natu",
      duration: "150 phút",
      content: "Toàn bộ chương trình Toán, Hóa, Sinh 12",
      title: "Đề thi THPT Quốc Gia",
      year: "2019",
      unit: "Bộ GD & ĐT"
    },
    {
      subject: "Sử-Địa-GDCD",
      class: "soci",
      duration: "150 phút",
      content: "Toàn bộ chương trình lịch sử, địa lý và GDCD 12",
      title: "Đề thi THPT Quốc Gia",
      year: "2019",
      unit: "Bộ GD & ĐT"
    },
  ];

  recentExam = [
    {
      subject: "Toán Học",
      class: "math",
      duration: "120 phút",
      content: "Toàn bộ chương trình toán 12",
      title: "Đề thi THPTQG",
      year: "2020",
      unit: "Bộ GD & ĐT"
    },
    {
      subject: "Địa lý",
      class: "geo",
      duration: "50 phút",
      content: "Toàn bộ chương trình địa lý 12",
      title: "Đề thi HKII",
      year: "2020/2021",
      unit: "Trường THPT Thủ Đức"
    },
    {
      subject: "Sử-Địa-GDCD",
      class: "soci",
      duration: "150 phút",
      content: "Toàn bộ chương trình lịch sử, địa lý và GDCD 12",
      title: "Đề thi THPT Quốc Gia",
      year: "2019",
      unit: "Bộ GD & ĐT"
    },
    {
      subject: "Lý-Hóa-Sinh",
      class: "natu",
      duration: "150 phút",
      content: "Toàn bộ chương trình Toán, Hóa, Sinh 12",
      title: "Đề thi THPT Quốc Gia",
      year: "2019",
      unit: "Bộ GD & ĐT"
    }
  ];

  allExam = [
    {
      subject: "Toán Học",
      class: "math",
      duration: "120 phút",
      content: "Toàn bộ chương trình toán 12",
      title: "Đề thi THPTQG",
      year: "2020",
      unit: "Bộ GD & ĐT"
    },
    {
      subject: "Địa lý",
      class: "geo",
      duration: "50 phút",
      content: "Toàn bộ chương trình địa lý 12",
      title: "Đề thi HKII",
      year: "2020/2021",
      unit: "Trường THPT Thủ Đức"
    },
    {
      subject: "Sử-Địa-GDCD",
      class: "soci",
      duration: "150 phút",
      content: "Toàn bộ chương trình lịch sử, địa lý và GDCD 12",
      title: "Đề thi THPT Quốc Gia",
      year: "2019",
      unit: "Bộ GD & ĐT"
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
    {label: "GDCD", value: "socedu"},
    {label: "Lý-Hóa-Sinh", value: "natu"},
    {label: "Sử-Địa-GDCD", value: "soci"}
  ];
  sortYearOptions = ["2019", "2020", "2020/2021"];
  sortField = "";

  showFilters = true;

  constructor() { }

  ngOnInit() {
    this.assignAllLesson();
  }

  assignAllLesson(){
    this.allExam.splice(0);
    this.examList.forEach(exam => this.allExam.push(Object.assign({}, exam)));
  }

  scrollToAllExam(subject: string){
    document.getElementById('allExam')?.scrollIntoView();
    this.setValueFilter(subject)
  }

  updateFilter(subject: string){
    this.assignAllLesson();
    this.allExam = this.allExam.filter(exam => exam.class == subject);
  }

  updateFilterYear(year: string){
    this.assignAllLesson();
    this.allExam = this.allExam.filter(exam => exam.year == year);
  }

  clearFilters(filterDropdown: any, filterYearDropdown:any){
    filterDropdown.clear();
    filterYearDropdown.clear();
    this.assignAllLesson();
  }

  setValueFilter(subject: string){
    this.myFormGroup.get(['filterDropdown'])?.setValue(subject);
    this.updateFilter(subject);
  }

}
