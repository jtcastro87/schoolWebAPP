import { NgModule } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';

import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';




@NgModule({
  declarations: [
    SearchComponent
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
