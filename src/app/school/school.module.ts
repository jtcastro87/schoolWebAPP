import { NgModule } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';

import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ConfirmDeleteComponent } from './component/confirm-delete/confirm-delete.component';





@NgModule({
  declarations: [
    SearchComponent,
    ConfirmDeleteComponent
  ],
  exports:[
    SearchComponent

  ],
  imports: [
    RouterModule,
    StudentModule,
    TeacherModule
  ]
})
export class SchoolModule { }
