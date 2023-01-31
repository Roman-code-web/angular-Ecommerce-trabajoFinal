import { Component, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  //imagenes
  slides = [
    {img: "https://home.ripley.com.pe/minisitios/home/huincha/23/01/30/webp/3.webp?v1"},
    {img: "https://home.ripley.com.pe/minisitios/home/huincha/23/01/30/webp/4.webp"},
    {img: "https://home.ripley.com.pe/minisitios/home/huincha/23/01/30/webp/0.webp"}
  ];
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1 , "infinity":true ,"fade":true ,"autoplay":true, "autoplaySpeed": 3000, "dots":true ,'nextArrow':false, "prevArrow":false };
  //botones
  @ViewChild('slickModal') slickModal!:SlickCarouselComponent;
  next(){
    this.slickModal.slickNext();
  }
  prev(){
    this.slickModal.slickPrev();
  }
}
