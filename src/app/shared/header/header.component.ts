import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private loginservice : LoginService , private router: Router){}
  logout(){
    this.loginservice.logout()
    .then(
      res=>{
        console.log(res);
        this.router.navigate(['/']);
      }
    )
    .catch(
      error=>{
        console.log(error);
      }
    )
  }
}
