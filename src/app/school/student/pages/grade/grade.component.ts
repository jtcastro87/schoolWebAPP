import { Component, OnInit  } from '@angular/core';
import { StudentService } from 'src/app/school/services/student.service';
import { GradeRes } from '../../interfaces/grade-response.interface';
import { Grade } from '../../interfaces/grade.interface';
import { StudentRes } from '../../interfaces/student-response.interface';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styles: [
    `
      input,label,select
      {
        margin-bottom: 10px
      }
    `
  ]
})


export class GradeComponent implements OnInit {

  // Contructor
  constructor( private studentService:StudentService) { }

  ngOnInit(): void {
    this.fillList();
    this.getGrades();
  }
  
  noteList:GradeRes[] = [];
  students:StudentRes[] = []; 
  show:boolean = false;
  agregado:boolean = false;

  valueSelect:string = "0" ;

  grade:Grade = {
    Student_id:'0',
    espanol: 0,
    matematica: 0,
    sociales: 0,
    naturales:0 
  }

  // Fill Select
  fillList(){
    this.studentService.getStudent().subscribe(resp =>{
      this.students = resp.Data
    });
  }

  // Para obtener el valor del value
  onSelecction(value:string ){
       this.grade.Student_id = value;
       this.agregado = false;
  }

  // Add grades
  addGrade(){
      this.studentService.addGrade(this.grade).subscribe(resp =>{
    if(resp.Success === true){

      this.grade = {
        Student_id:'0',
        espanol: 0,
        matematica: 0,
        sociales: 0,
        naturales:0 
      }
      this.agregado = true;
      
    }

    console.log(resp);
     });
  }


  // Obtiene todas las calificaciones
  getGrades(){
    this.studentService.getGrades().subscribe(resp => {
      this.noteList = resp.Data;
      console.log(resp)
      
    })
  }
 
    
  




  


}
