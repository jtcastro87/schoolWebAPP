import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/school/services/student.service';
import { assist } from '../../interfaces/assist.interface';
import { date } from '../../interfaces/date.interface';
import { ListRes } from '../../interfaces/list-response.interface';
import { StudentRes } from '../../interfaces/student-response.interface';

@Component({
  selector: 'app-assist',
  templateUrl: './assist.component.html',
  styleUrls: ['./assist.component.css']
})


export class AssistComponent implements OnInit {


  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.fillList();
  } 

  listStudent:StudentRes[] = [];
  dateList:ListRes[] = [];
  date!:string;
  message:string = "No data to display";
  typeAlert!:string;
  showAlert!: boolean;
  showListAssist:boolean = false;

   // Carga los estudiantes
   fillList(){
    this.studentService.getStudent().subscribe(resp =>{
      this.listStudent = resp.Data
    });
  }


  // Assist
  assistStudent(id: number, present: string){
    const assist:assist  = {
      student_id: id,
      present: present
    }
    this.studentService.addAssist(assist);
  }

  // Envia la fecha de busqueda
  getDateAssist(){

    const content:date={
      date: this.date
    }

   this.studentService.searchAssist(content).subscribe(resp =>{
      
      if(resp.Data !=null ){
        this.showListAssist = true;
        this.dateList = resp.Data;
      }
      else{
        this.showListAssist = false;
        this.typeAlert = "warning";
        this.showAlert = true;
      }                  
    })
  }

  // Se ejecuta al cambiar la fecha en el input
  reset(){
    this.showAlert = false;
  }



}
