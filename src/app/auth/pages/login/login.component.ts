import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { Userlogin } from '../../interface/username.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'  ]
})
export class LoginComponent implements OnInit {

  constructor( 
          private router:Router,
          private authService: AuthService) { }

  ngOnInit(): void {
  }

  userLogin:Userlogin = {
    Username: "",
    Password: "",
  }

  login(){

    this.authService.login(this.userLogin).subscribe(resp =>{
      
        if( resp.Data.Password ){
          console.log(resp.Data.Password)
          this.router.navigate(['./student']);
        }
          
        console.log(resp);
    })

   
  }
}
