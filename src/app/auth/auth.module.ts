import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from './login/login.component';

@NgModule({

  declarations:[
    LoginComponent
  ],
  imports:[
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[]
})

export class AuthModule {}
