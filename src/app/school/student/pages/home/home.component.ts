import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`

      .container{
         margin-top: 15px;
      }
      div.user{
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
      }  
    `]
})


export class HomeComponent  {

  // Constructor
  constructor(private route:Router,
              private authService: AuthService) { }

  // Metodo para cerrar sesion
  logout(){
    this.route.navigate(['./auth'])
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }

  get user(){
    return this.authService.user;
  }


}
