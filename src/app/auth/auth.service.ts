import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User, UserResponse } from './interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Constructor
  constructor( private httpClient: HttpClient) { }

  // Base URL
  private baseUrl: string = environment.baseUrl;
  
  // Obtiene la lista de todos los estudiantes
  login(user:User):Observable<UserResponse>{

    return this.httpClient.post<UserResponse>(`${this.baseUrl}/teacher/login`,user)    
  }
}
