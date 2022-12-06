import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AddStudentComponent } from "./pages/add/add.component";
import { AssistComponent } from "./pages/assist/assist.component";
import { HomeComponent } from "./pages/home/home.component";
import { ListComponent } from "./pages/list/list.component";
import { GradeComponent } from "./pages/grade/grade.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:
    [
      { path: 'list', component: ListComponent },
      { path: 'assist', component: AssistComponent },
      { path: 'grade', component: GradeComponent },
      { path: 'add', component: AddStudentComponent },
      { path: 'edit/:id', component: AddStudentComponent },
      { path: ':id', component: HomeComponent },
      { path: '**', redirectTo: 'list' }
    ]

  }
];

@NgModule({

  imports:[
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]

})

export class StudentRoutingModule {}
