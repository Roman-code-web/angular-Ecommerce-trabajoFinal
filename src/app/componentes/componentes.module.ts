import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';



@NgModule({
  declarations: [
    SliderComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule
  ],exports:[
    SliderComponent
  ]
})
export class ComponentesModule { }
