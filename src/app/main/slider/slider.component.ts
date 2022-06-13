import { Component, ViewEncapsulation } from "@angular/core";
import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

interface sliderItems{ 
  title: string,
  price: string,
  oldPrice?: string,
  img: string,
}

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class SliderComponent {

  sliderItems = [
    [
      { title: 'Ceiling Light', price: '$75.00', oldPrice: '$82.00', img: '../../assets/img/slider-items/slider-1.png'},
      { title: 'Wood Chair', price: '$50.00', img: '../../assets/img/slider-items/slider-2.png'},
      { title: 'Papper Cupboard', price: '$105.00', oldPrice: '$120.00', img: '../../assets/img/slider-items/slider-3.png'},
      { title: 'Ole Gundorse Spring', price: '$82.00', oldPrice: '$100.00', img: '../../assets/img/slider-items/slider-4.png'},
      { title: 'Treos Seroes 911', price: '$200.00', img: '../../assets/img/slider-items/slider-5.png'},
      { title: 'Multi bilderman slibber', price: '$45.00', oldPrice: '$50.00', img: '../../assets/img/slider-items/slider-6.png'},
      { title: 'XORA corner desk', price: '$320.00', oldPrice: '$325.00', img: '../../assets/img/slider-items/slider-7.png'},
      { title: 'Black Forest Series wo', price: '$255.00', img: '../../assets/img/slider-items/slider-8.png'},
    ],
    [
      { title: 'Ceiling Light', price: '$75.00', oldPrice: '$82.00', img: '../../assets/img/slider-items/slider-1.png'},
      { title: 'Wood Chair', price: '$50.00', img: '../../assets/img/slider-items/slider-2.png'},
      { title: 'Papper Cupboard', price: '$105.00', oldPrice: '$120.00', img: '../../assets/img/slider-items/slider-3.png'},
      { title: 'Ole Gundorse Spring', price: '$82.00', oldPrice: '$100.00', img: '../../assets/img/slider-items/slider-4.png'},
      { title: 'Treos Seroes 911', price: '$200.00', img: '../../assets/img/slider-items/slider-5.png'},
      { title: 'Multi bilderman slibber', price: '$45.00', oldPrice: '$50.00', img: '../../assets/img/slider-items/slider-6.png'},
      { title: 'XORA corner desk', price: '$320.00', oldPrice: '$325.00', img: '../../assets/img/slider-items/slider-7.png'},
      { title: 'Black Forest Series wo', price: '$255.00', img: '../../assets/img/slider-items/slider-8.png'},
    ],
  ]
}