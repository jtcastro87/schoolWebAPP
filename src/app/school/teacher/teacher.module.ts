import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AddTeacherComponent } from "./pages/add/add-teacher.component";
import { HomeComponent } from './pages/home/home.component';
import { TeacherRoutingModule } from "./teacher-routing.module";

@NgModule({
  declarations:[
    AddTeacherComponent,
    HomeComponent
  ],
  imports:[
    CommonModule,
    TeacherRoutingModule
  ],
  exports:[]
})


export class TeacherModule {}
