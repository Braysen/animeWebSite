import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit{
  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "arrows": true,
    "dots": false,
    "infinite": true,
    "autoplay": true,
    "responsive": [
      {
        "breakpoint": 769,
        "settings": {
          "slidesToShow": 2,
          "slidesToScroll": 1,
        }
      },
      {
        "breakpoint": 361,
        "settings": {
          "slidesToShow": 1,
          "slidesToScroll": 1
        }
      }
    ]
  };
  public recommendedAnimesData = [
    "https://derf9v1xhwwx1.cloudfront.net/image/upload/c_fill,q_80,w_265,h_397/oth/FunimationStoreFront/1319501/Latvian/1319501_Latvian_ShowKeyart_ee0b96bf-f1e3-ea11-82a8-dd291e252010.jpg",
    "https://derf9v1xhwwx1.cloudfront.net/image/upload/c_fill,q_80,w_265,h_397/oth/FunimationStoreFront/100005663/07016159-8a8e-43bb-8d1b-4b723896ef82/100005663_TCS_Keyart_2a00e27e-c6b5-4ccf-ac83-d508f5b67fbe.jpg",
    "https://derf9v1xhwwx1.cloudfront.net/image/upload/c_fill,q_80,w_265,h_397/oth/FunimationStoreFront/1644569/6b792cac-6844-4a66-aab3-c4d1a62dd72b/1644569_HYO_Keyart_3c93eb6d-9518-4cbe-bf2b-5d4dcbbcf770.jpg",
    "https://derf9v1xhwwx1.cloudfront.net/image/upload/c_fill,q_80,w_265,h_397/oth/FunimationStoreFront/1498648/Latvian/1498648_Latvian_ShowKeyart_b10b93cb-f1e3-ea11-82a8-dd291e252010.jpg"
  ]

  constructor(){}

  ngOnInit(): void {
  }
}