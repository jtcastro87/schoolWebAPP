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
    `
  ]
})

export class ListComponent implements OnInit  {

  listStudent:StudentRes[] = [];
  termino:string=""

  constructor(private studentService: StudentService) { }

  ngOnInit(){
    this.studentService.getStudent().subscribe(resp =>{
      this.listStudent = resp.Data
    });
  }

  // para remover un usuario
  removeStudent(id:number){
    this.studentService.removeStudent(id).subscribe(resp =>{
      console.log(resp)
    });
    location.reload();

  }

  // Realiza la busqueda
  searchStudent(termino: string){
    console.log(termino)
  }



}
