import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { User, UserResponse } from '../../interface/user.interface';
import { Userlogin } from '../../interface/username.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'  ]
})
export class LoginComponent {

  // Constructor
  constructor( 
          private router:Router,
          private authService: AuthService) { }

 
  // Para capturar la informacion de los input
  userLogin:Userlogin = {
    Username: "",
    Password: "",
  }

  show:boolean = false;
  message!: string;

  // Envia los datos del usuario
  login(){
  
    if(this.userLogin.Username === "" || this.userLogin.Password === ""){
      this.message = "**User and password is required.";
      this.show = true;
    }else{
      this.authService.login(this.userLogin).subscribe((resp:UserResponse) =>{
        if(resp.Success && resp.Data != null){
          this.router.navigate(['./student']);
          console.log(resp.Mensaje)
        }else{
          this.message ='**'+resp.Mensaje;
          this.show = true;
        }
      });
    }
    
    
   
  }

  reset() {
    this.show = false;
  }





}
