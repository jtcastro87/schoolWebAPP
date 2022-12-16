import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User, UserResponse } from './interface/user.interface';
import { Userlogin } from './interface/username.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Constructor
  constructor( private httpClient: HttpClient) { }

  // Base URL
  private baseUrl: string = environment.baseUrl;
  private _user:Userlogin | undefined; // Almacena los datos del usuario desde la base de datos
  
  // Consulta el usuario ingresado en la base de datos
  login(user:User){

    return this.httpClient.post<UserResponse>(`${this.baseUrl}/teacher/login`,user)
                          .pipe(
                            tap((resp) => this._user = resp.Data ), // Guarda los datos del usuario en el localstorage
                            tap((resp) => localStorage.setItem('username',resp.Data.Username)),
                            tap((resp) => localStorage.setItem('password',resp.Data.Password))
                          );
  }

  // Verifica la el usuario logeado 
  get verifyUser():Observable<boolean>{

    if(!localStorage.getItem('username') && !localStorage.getItem('password')) // Verifica si el username esta en el localstorage 
      return of(false);
    
    return this.httpClient.post<UserResponse>(`${this.baseUrl}/teacher/login`,
                      {username:localStorage.getItem('username'),password:localStorage.getItem('password')})
                          .pipe(
                            map(auth =>{
                              this._user = auth.Data
                              return true;
                            })
                          );
  }

  // Obtiene el usuario logeado
  get user(){
    return {...this._user}
  }



}
