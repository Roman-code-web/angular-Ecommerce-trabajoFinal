import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login/login.service';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';
import Swal from 'sweetalert2';

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
  constructor(private frm: FormBuilder , private loginservice :LoginService , private router: Router , private usuarioservice: UsuarioService){
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
  //login con email y password
  login(){

    this.loginservice.loginUsuario(this.formLogin.value)//envio datos del formulario
    .then(
      res=>{
            localStorage.setItem('user',JSON.stringify({'uid': res?.user.uid , 'email':res.user.email, 'photoURL':res.user?.photoURL,'rol':'user' }));
            this.usuarioservice.agregarUsuario({'uid': res?.user.uid , 'email':res.user.email, 'photoURL':res.user?.photoURL ,'rol':'user' })
            this.router.navigate(['/']);
          }
    )
    .catch(
      error=> {
        Swal.fire({
          icon: 'error',
          title: 'usuario y contraseña incorrecta',
        })
      }
      
    )
    console.log(this.formLogin.value)
  }

  loginGoogle(){
    this.loginservice.loginGoogle()
    .then(
      res=>{
            //user autenticacion
            localStorage.setItem('user',JSON.stringify({'uid': res?.user.uid , 'email':res.user?.email, 'photoURL':res.user?.photoURL,'rol':'user' }));
            this.usuarioservice.agregarUsuario({id: res?.user.uid , 'email':res.user.email, 'photoURL':res.user?.photoURL ,'rol':'user' })
            .then(
              res=>{
                //user registro coleccion
                localStorage.setItem('userid',JSON.stringify({'id': res?.id , 'rol':'user' }));
              }
            )
            this.router.navigate(['/']);
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
