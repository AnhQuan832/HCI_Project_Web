import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.less']
})
export class StatisticComponent implements OnInit {

  universities = [
    {
      uniID: "UIT",
      uniName: "Đại học công nghệ thông tin"
    },
    {
      uniID: "HCMUT",
      uniName: "Trường Đại học Bách khoa thành phố Hồ Chí Minh"
    },
    {
      uniID: "HCMUS",
      uniName: "Trường Đại học Khoa học Tự nhiên"
    },
  ];

  selectedUniversities = [
    {
      uniID: "UIT",
      uniName: "Đại học công nghệ thông tin"
    },
    {
      uniID: "HCMUT",
      uniName: "Trường Đại học Bách khoa thành phố Hồ Chí Minh"
    },
    {
      uniID: "HCMUS",
      uniName: "Trường Đại học Khoa học Tự nhiên"
    },
  ]

  visible = true;

  majors = [
    {
      name: "Công nghệ thông tin",
      id: "CNTT"
    },
    {
      name: "Marketing",
      id: "Marketing"
    },
    {
      name: "Môi trường",
      id: "Env"
    },
  ];
  selectedMajors = [];

  basicData = {
    labels: ['2018', '2019', '2020', '2021', '2022'],
    datasets: [
        {
            label: 'HCMUT',
            data: [29.2, 25.1, 28, 25.8, 29],
            fill: false,
            borderColor: '#1C6DD0',
            tension: .4
        },
        {
            label: 'UIT',
            data: [28, 26.5, 27.2, 25.8, 28],
            fill: false,
            borderColor: '#03C988',
            tension: .4
        },
        {
          label: 'HCMUS',
          data: [27.2, 26.5, 23, 28, 26.6],
          fill: false,
          borderColor: '#FF9C27',
          tension: .4
      }
    ]
  };

  basicOptions = {
    plugins: {
        legend: {
            labels: {
                color: '#495057'
            }
        }
    },
    scales: {
        x: {
            ticks: {
                color: '#495057'
            },
            grid: {
                color: '#ebedef'
            }
        },
        y: {
            ticks: {
                color: '#495057'
            },
            grid: {
                color: '#ebedef'
            }
        }
    }
  }

  dreams = [
    {
      no: "1",
      uniID : "QSB",
      majorID: "106",
      majorName: "Khoa học Máy Tính",
      majorGroup: "A01",
      passPercent: "65"
    },
    {
      no: "2",
      uniID : "QSB",
      majorID: "206",
      majorName: "Khoa học Máy Tính (CT Chất lượng cao)",
      majorGroup: "A01",
      passPercent: "70"
    },
    {
      no: "3",
      uniID : "QST",
      majorID: "7480201_NN",
      majorName: "Nhóm ngành Máy tính và CNTT",
      majorGroup: "A01",
      passPercent: "74"
    },
    {
      no: "4",
      uniID : "QST",
      majorID: "7480201_CLC",
      majorName: "Nhóm ngành Máy tính và CNTT (CT Chất lượng cao)",
      majorGroup: "A01",
      passPercent: "79"
    },
    {
      no: "5",
      uniID : "QSC",
      majorID: "7480101",
      majorName: "Khoa học Máy Tính",
      majorGroup: "A01",
      passPercent: "83"
    },
    {
      no: "6",
      uniID : "QSC",
      majorID: "7480101_CLC",
      majorName: "Khoa học máy tính chương trình chất lượng cao",
      majorGroup: "A01",
      passPercent: "87"
    },
    {
      no: "7",
      uniID : "FPT",
      majorID: "7480201",
      majorName: "Công nghệ thông tin",
      majorGroup: "A01",
      passPercent: "98"
    }
  ]

  constructor() { }

  ngOnInit() {
    window.addEventListener("resize", this.refreshGraph);
  }

  refreshGraph(){
    
  }

  refreshTable(){
    this.visible = false;
    setTimeout(() => this.visible = true, 0);
  }

  deleteUni(deleteUni: any){
    let found = this.selectedUniversities.findIndex((uni) => {
      return uni == deleteUni;
    })

    this.selectedUniversities.splice(found, 1);
    this.refreshTable();
  }

}
