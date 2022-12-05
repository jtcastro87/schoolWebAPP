import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/material/material.module";


import { AddStudentComponent } from './pages/add/add.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { StudentRoutingModule } from "./student-routing.module";
import { AssistComponent } from './pages/assist/assist.component';
import { GradeComponent } from './pages/grade/grade.component';

@NgModule({
  declarations:[
    AddStudentComponent,
    HomeComponent,
    ListComponent,
    AssistComponent,
    GradeComponent
  ],
  imports:[
    CommonModule,
    StudentRoutingModule,
    MaterialModule

  ],
  exports:[]
})

export class StudentModule {}
