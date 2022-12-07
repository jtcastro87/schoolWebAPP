import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserResponse } from './interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private httpClient: HttpClient) { }

  private baseUrl:string = 'http://192.168.122.181:5000/api';

  // Obtiene la lista de todos los estudiantes
  login(user:User){

    return this.httpClient.post<UserResponse>(`${this.baseUrl}/teacher/login`,user)
    
  }
}
