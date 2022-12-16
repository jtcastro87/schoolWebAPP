import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanLoad,Router, Route, RouterStateSnapshot, Routes, UrlSegment } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements  CanLoad {

  // Constructor
  constructor( private authService: AuthService,
               private router: Router ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    return this.authService.verifyUser.pipe(
      tap (auth =>{
        if(!auth)
          this.router.navigate(['./auth']); 
      })
    )
  }

  canLoad( 
    
    route: Route,
    segments: UrlSegment[]): Observable<boolean> {

    return this.authService.verifyUser.pipe(
      tap (auth =>{
        if(!auth)
          this.router.navigate(['./auth']); 
      })
    )

  }
}
