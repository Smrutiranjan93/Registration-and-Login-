import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  // slides = [
  //   {'image': 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.republicworld.com%2Frepublic-prod%2Fstories%2Fpromolarge%2Fxhdpi%2Fyiywcgdvqa3rzx9r_1612249272.jpeg&imgrefurl=https%3A%2F%2Fwww.republicworld.com%2Findia-news%2Fgeneral-news%2Fbihar-board-exams-2021-163-students-expelled-on-day-1-of-intermediate-exams.html&tbnid=DxqoxoJQbIFIDM&vet=12ahUKEwiB7qmKyM79AhXI0qACHc-ADogQMygJegUIARDFAQ..i&docid=CgqnbYJ4GrQ0qM&w=768&h=438&q=bihar%20student%20exam%20photo&ved=2ahUKEwiB7qmKyM79AhXI0qACHc-ADogQMygJegUIARDFAQ'},
  //   {'image': 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fresize.indiatvnews.com%2Fen%2Fresize%2Fnewbucket%2F730_-%2F2020%2F02%2Fbseb-1581860526.jpg&imgrefurl=https%3A%2F%2Fwww.indiatvnews.com%2Feducation%2Fcareer-bseb-bihar-board-class-10-exam-2020-bseb-admit-cards-589505&tbnid=UI2jNl1t5YdKUM&vet=12ahUKEwiB7qmKyM79AhXI0qACHc-ADogQMygHegUIARDBAQ..i&docid=-WjgcIbbgD4e_M&w=715&h=402&q=bihar%20student%20exam%20photo&ved=2ahUKEwiB7qmKyM79AhXI0qACHc-ADogQMygHegUIARDBAQ'},
  //   {'image': 'https://www.google.com/imgres?imgurl=https%3A%2F%2Feduvoice.in%2Fwp-content%2Fuploads%2F2018%2F01%2FBihar-Exam-Fail.jpg&imgrefurl=https%3A%2F%2Feduvoice.in%2Fbrabu-exams%2F&tbnid=Fi8IUq4KxHZ1AM&vet=12ahUKEwiB7qmKyM79AhXI0qACHc-ADogQMygTegUIARDZAQ..i&docid=O13o3Y8V8N2tSM&w=800&h=418&q=bihar%20student%20exam%20photo&ved=2ahUKEwiB7qmKyM79AhXI0qACHc-ADogQMygTegUIARDZAQ'},
  //   {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'},
  //   {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}
  // ];

  slides = [
    {
      image:
        'https://therichpost.com/wp-content/uploads/2021/02/Vuejs-Fashion-Ecommerce-Template-Free.png',
    },
    {
      image:
        'https://therichpost.com/wp-content/uploads/2021/02/angular-11-bootstrap-4.5-Ecommerce-Template-Free.png',
    },
    {
      image:
        'https://therichpost.com/wp-content/uploads/2020/10/Angular-10-Learning-Education-Center-Free-Template-1.png',
    },
    {
      image:
        'https://therichpost.com/wp-content/uploads/2020/11/Reactjs-Easy-Shop-Free-Template-with-Source-Code.png',
    },
    {
      image:
        'https://therichpost.com/wp-content/uploads/2021/02/angular-11-bootstrap-4.5-Ecommerce-Template-Free.png',
    },
  ];
}
