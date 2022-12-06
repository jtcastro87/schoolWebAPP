import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/school/services/student.service';
import { StudentRes } from '../../interfaces/student-response.interface';

@Component({
  selector: 'app-assist',
  templateUrl: './assist.component.html',
  styles: [
        `
          .listado{
            display: flex;
            flex-direction: column;
            justify-content: space-base;
          }  

          .listado li span{
            display: inline-block;
            width: 70%;
          }

          li{
            margin-bottom: 5px
          }

          .btn{
            margin-left: 10px
          }

          label{
            margin: 0 10px;
          }

          input[type=radio]{
            width: 25px
          }
        `
  ]
})
export class AssistComponent implements OnInit {


  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.fillList();
  }

  listStudent:StudentRes[] = [];

   // Carga los estudiantes
   fillList(){
    this.studentService.getStudent().subscribe(resp =>{
      console.log(resp.Data)
      this.listStudent = resp.Data
    });
  }


  // Assis
  assistStudent(id: number, absent: string){
    this.studentService.addAssist(id,absent).subscribe(resp =>{
      console.log(resp.Data);
    })
  }

}
