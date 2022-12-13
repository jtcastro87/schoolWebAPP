import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`

      .container{
         margin-top: 15px;
      }     

    `]
})


export class HomeComponent  {

  // Constructor
  constructor(private route:Router) { }

  // Metodo para cerrar sesion
  logout(){
    this.route.navigate(['./auth'])
  }


}
