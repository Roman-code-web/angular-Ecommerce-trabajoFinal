import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mensajeError={
    email:'',
    password:''
  }

  formLogin!:FormGroup;
  constructor(private frm: FormBuilder){
    this.formLogin=frm.group({
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
    })
  }
  login(){
    console.log(this.formLogin.value)
  }

   //validacion formulario
  validacion(name: string) {
    if(this.formLogin.get(name)?.errors && (this.formLogin.get(name)?.touched || this.formLogin.get(name)?.dirty)){
      if(this.formLogin.get(name)?.errors?.['required']){
        if(name=='email'){
          this.mensajeError.email="el campo es requerido"; 
        }else if (name=='password'){
          this.mensajeError.password="El campo es requerido";
        }
        
      }else if(this.formLogin.get(name)?.errors?.['minlength']){
        if(name=='password'){
          this.mensajeError.password="Mínimo de caracteres 6"; 
        }

      }else if(this.formLogin.get(name)?.errors?.['pattern']){
        if(name=='email'){
          this.mensajeError.email="Email Inválido";
        }
      }
    }
    return this.formLogin.get(name)?.errors && (this.formLogin.get(name)?.touched || this.formLogin.get(name)?.dirty);
  }

}
