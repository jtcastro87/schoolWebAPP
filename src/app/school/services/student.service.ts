import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../student/interfaces/Student.interface';
import { StudentResponse } from '../student/interfaces/student-response.interface';
import { StudentIDResponse } from '../student/interfaces/studentid.interface';
import { assist } from '../student/interfaces/assist.interface';
import { date } from '../student/interfaces/date.interface';
import { ListStudentResponse } from '../student/interfaces/list-response.interface';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  private baseUrl:string = 'http://192.168.122.181:5000/api';

  public error:boolean = false;

  private result:Student | undefined;
 
  // Constructor
  constructor(private httpClient: HttpClient) { }

  // Obtiene la lista de todos los estudiantes
  getStudent():Observable<StudentResponse>{

    return this.httpClient.get<StudentResponse>(`${this.baseUrl}/student/getall`)
    
  }

  // Obtiene un estudiante por su ID
  editStudent(id: number):Observable<StudentIDResponse>{

    return this.httpClient.get<StudentIDResponse>(`${this.baseUrl}/student/getbyid/${id}`);                        

  }

  // Busca por nombre
  searchStudent(name: string):Observable<StudentResponse>{
    return this.httpClient.post<StudentResponse>(`${this.baseUrl}/student/name`,{name: name});                        

  }

  // Agrega nuevo estudiante
  addStudent(newStudent:Student){

    this.httpClient.post<StudentResponse>(`${this.baseUrl}/student/add`,newStudent)
                   .subscribe(res =>{
                      if(res.Success === true){
                        this.error = false;  
                      }  
                   },(err) =>{
                      console.log('Error =>',err)
                   });
  }

  // Actualiza un estudiante
  updateStudent(student:Student ):Observable<StudentResponse>{
   return this.httpClient.put<StudentResponse>(`${this.baseUrl}/student/update`,student);
  }

  // Remueve un estudiante
  removeStudent(id:number){
    return this.httpClient.delete<StudentResponse>(`${this.baseUrl}/student/remove/${id}`);                    
                  
  }

  // Para el pase de la lista
  addAssist(content:assist){
    
    return this.httpClient.post<any>(`${this.baseUrl}/assist/add`,content);
  }

  // Obtiene el historial del dia
  searchAssist(content:date):Observable<any>{

    return this.httpClient.post<ListStudentResponse>(`${this.baseUrl}/assist/getassists`,content);

  }

  



}
