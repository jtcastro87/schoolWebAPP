import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AddTeacherComponent } from "./pages/add/add-teacher.component";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:
    [
      { path:'home', component: HomeComponent },
      { path:'add',  component: AddTeacherComponent },
      { path:'**', redirectTo: 'home' }
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

export class TeacherRoutingModule {}
