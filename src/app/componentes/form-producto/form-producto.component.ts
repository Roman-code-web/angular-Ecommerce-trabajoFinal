import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/servicios/productos/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent {
  formRProductos!:FormGroup;
  listaCategoria=[
    {
      nombreCategoria:'Tecnologia',
      value:'Tecnologia'
    },
    {
      nombreCategoria:'Hogar',
      value:'Hogar'
    },
    {
      nombreCategoria:'Belleza',
      value:'Belleza'
    },
    {
      nombreCategoria:'Moda',
      value:'Moda'
    },
  ];
  constructor(private frmB:FormBuilder , private productoservice : ProductoService , private router:Router){
    this.formRProductos=frmB.group({
      nombre:['',
        [
          Validators.required
        ]
      ],
      marca:['',
        [
          Validators.required
        ]
      ],
      descripcion:['',
        [
          Validators.required
        ]
      ],
      categoria:['',
        [
          Validators.required
        ]
      ],
      imagen:['',
        [
          Validators.required
        ]
      ],
      estado:['',
        [
          Validators.required
        ]
      ],
      costoUnitario:['',
        [
          Validators.required
        ]
      ],
      oferta:['',
        [
          Validators.required
        ]
      ],
      stock:['',
        [
          Validators.required
        ]
      ],
      total:['',
      [
        Validators.required
      ]
      ],
    });
  }

  //calculo del total
  calculoTotal(){
    if(this.formRProductos.get('costoUnitario')?.valid && this.formRProductos.get('stock')?.valid  ){
      const resul=this.formRProductos.get('costoUnitario')?.value * this.formRProductos.get('stock')?.value;
      this.formRProductos.get('total')?.setValue(resul);
    }
  }

  async GuardarProducto(){
    try {
      let res= this.productoservice.agregarProducto(this.formRProductos.value);
      if(await res){
        Swal.fire({
          icon: 'success',
          title: 'Usuario registrado',
        });  
        
        //this.router.navigate(['/']);
      }
      this.formRProductos.reset();
      this.formRProductos.markAsPristine();
      this.formRProductos.clearValidators();
    } catch (error) {
      console.log(error);
    } 
  }
  //validacion formulario
  validacion(name: string) {
    return this.formRProductos.get(name)?.errors && (this.formRProductos.get(name)?.touched || this.formRProductos.get(name)?.dirty);
  }
  //regresar
  regresar(){
    this.router.navigate(['dashboard/productos']);
  }
}
