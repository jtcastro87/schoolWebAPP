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
  date:string ="";
  errorMessage:string = "No data to display";
  notFound: boolean = false;
  show:boolean = false;

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
    this.studentService.addAssist(assist).subscribe(resp =>{
      
    })
  }

  // Envia la fecha de busqueda
  getDateAssist(){

    const content:date={
      date: this.date
    }

   this.studentService.searchAssist(content).subscribe(resp =>{
      if(resp.Data){
        this.notFound = false;
        this.show = true;
        this.dateList = resp.Data;
        console.log(this.dateList);
      }
      else{
        this.show = false;
        this.notFound = true;
      }
      
                      
    })
  }



}
