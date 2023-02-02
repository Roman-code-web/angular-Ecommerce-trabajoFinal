import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login/login.service';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';

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
  constructor(private frmb: FormBuilder, private loginservice:LoginService , private router:Router){
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
    this.loginservice.registrarUsuario(this.formRegistrar.value)
    .then(
      res=>{
        console.log(res);
        this.router.navigate(['/login']);
      }
    )
    .catch(
      error=>{
        console.log(error);
      }
    )
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
