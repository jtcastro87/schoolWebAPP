import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/school/services/student.service';
import { StudentRes } from '../../interfaces/student-response.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
    
    `
      .btn{
        margin-right: 10px
      }
      
      form{
        margin-bottom: 10px;
      }
    `
  ]
})


export class ListComponent implements OnInit  {  

  // Constructor
  constructor(private studentService: StudentService) { }

  ngOnInit(){
    this.fillList();
  }

  listStudent:StudentRes[] = [];
  termino:string=""
  notFound:boolean = false;
  errorMessage!:string

  // Carga los estudiantes
  fillList(){
    this.studentService.getStudent().subscribe(resp =>{
      this.listStudent = resp.Data
    });
  }

  // Para remover un usuario
  removeStudent(id:number){
    this.studentService.removeStudent(id).subscribe(resp =>{
      console.log(resp)
    });
    location.reload();

  }

  // Realiza la busqueda
  searchStudent(termino: string){
    if(termino.length == 0)
      this.fillList();
    else
      this.studentService.searchStudent(termino).subscribe(resp =>{
        console.log(resp.Data)
        this.listStudent = resp.Data;
      }, err => {
        if(err.error.Success === false){
          this.notFound = true;
          this.errorMessage = err.error.Mensaje;
        }
        
      })
    }

    reset(){
      this.notFound = false
    }


}
