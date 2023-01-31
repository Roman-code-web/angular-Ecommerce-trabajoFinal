import { Component } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  //imagenes
  slides = [
    {img: "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/42852086-3uYPYq-j.jpg",
    categoria:"Tecnología"
    },
    {img: "https://home.ripley.com.pe/Attachment/WOP_5/2013300835157/2013300835157_2.jpg",
    categoria:"Belleza"
    },
    {img: "https://img.freepik.com/foto-gratis/diseno-interiores-marcos-fotos-sofa_23-2149385443.jpg",
    categoria:"Hogar"
    },
    {img: "https://imagenes.elpais.com/resizer/flD0kxN21xSaMjLAxrRlUyumXVU=/1200x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/U7S3YIRSQC3YQYLHBOHVV3ESZ4.jpg",
    categoria:"Moda"
    },
    {img: "https://oechsle.vteximg.com.br/arquivos/ids/12924921-800-800/imageUrl_1.jpg",
    categoria:"Deporte"
    }
  ];
  slideConfig = {"slidesToShow": 4, "slidesToScroll":1 , "infinity":true ,"autoplay":true, "autoplaySpeed": 2000, "dots":true , 'nextArrow':false, "prevArrow":false, 
  "responsive": [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
};
}
