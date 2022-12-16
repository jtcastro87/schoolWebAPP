import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NotFundPageComponent } from './not-fund-page/not-fund-page.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [

  {
    path: 'auth',
    loadChildren:() => import('./auth/auth.module').then(auth => auth.AuthModule)
  },
  {
    path: 'student',
    loadChildren:() => import('./school/student/student.module').then(m => m.StudentModule),
    canLoad: [AuthGuard], canActivate: [AuthGuard]
  },  
  {
    path: '',
    redirectTo: 'auth', pathMatch: 'full'
  },
  {
    path: '404',
    component: NotFundPageComponent
  },
  {
    path:'**',
    redirectTo: '404'
  }
];


@NgModule({
    imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
