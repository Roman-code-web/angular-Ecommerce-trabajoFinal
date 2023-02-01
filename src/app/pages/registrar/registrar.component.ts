import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  mensajeError={
    email:'',
    password:''
  }

  formRegistrar!:FormGroup;
  constructor(private frmb: FormBuilder){
    this.formRegistrar=frmb.group({
      email:['',
      [
        Validators.required,
        Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$')
      ]
      ],
      password:['',
      [ Validators.required,
        Validators.minLength(6)
      ]
      ] 
    });
  }
  registrar(){
    console.log(this.formRegistrar.value)
  }
  //validacion formulario
  validacion(name: string) {
    if(this.formRegistrar.get(name)?.errors && (this.formRegistrar.get(name)?.touched || this.formRegistrar.get(name)?.dirty)){
      if(this.formRegistrar.get(name)?.errors?.['required']){
        if(name=='email'){
          this.mensajeError.email="el campo es requerido"; 
        }else if (name=='password'){
          this.mensajeError.password="El campo es requerido";
        }
        
      }else if(this.formRegistrar.get(name)?.errors?.['minlength']){
        if(name=='password'){
          this.mensajeError.password="Mínimo de caracteres 6"; 
        }

      }else if(this.formRegistrar.get(name)?.errors?.['pattern']){
        if(name=='email'){
          this.mensajeError.email="Email Inválido";
        }
      }
    }
    return this.formRegistrar.get(name)?.errors && (this.formRegistrar.get(name)?.touched || this.formRegistrar.get(name)?.dirty);
  }

}
