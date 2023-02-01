import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogin!:FormGroup;
  constructor(private frm: FormBuilder){
    this.formLogin=frm.group({
      email:['',
      [Validators.required]
      ],
      password:['',
      [Validators.required]
      ] 
    })
  }
  login(){
    console.log(this.formLogin.value)
  }
}
