import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CategoriasComponent } from './categorias/categorias.component';
import { AnunciosComponent } from './anuncios/anuncios.component';



@NgModule({
  declarations: [
    SliderComponent,
    CategoriasComponent,
    AnunciosComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule
  ],exports:[
    SliderComponent,
    AnunciosComponent,
    CategoriasComponent
  ]
})
export class ComponentesModule { }
