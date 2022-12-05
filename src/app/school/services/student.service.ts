import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { resourceLimits } from 'worker_threads';
import { Student, StudentResponse } from '../student/interfaces/student.interface';

@Injectable({
  providedIn: 'root'
})



export class StudentService {

  result:Student[] = [];

  // Constructor
  constructor(private httpClient: HttpClient) { }

  // Realiza la peticion
  getStudent():Observable<StudentResponse>{

    return this.httpClient.get<StudentResponse>('http://192.168.122.181:5000/api/student/getall')


  }

}
