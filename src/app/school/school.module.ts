import { NgModule } from '@angular/core';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { MessageDeleteDialogComponent } from './student/component/message-delete-dialog/message-delete-dialog.component';


@NgModule({
  declarations: [
    SearchComponent,
    MessageDeleteDialogComponent,
   
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
