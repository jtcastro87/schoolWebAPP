import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/school/services/student.service';
import { StudentRes } from '../../interfaces/student-response.interface';
import { MatDialog } from '@angular/material/dialog';
import { MessageDeleteDialogComponent } from 'src/app/school/student/component/message-delete-dialog/message-delete-dialog.component';
import { stringify } from 'querystring';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [`
      .btn{
        margin-right: 10px
      }
      
      form{
        margin-bottom: 20px;
      }
    `]
})


export class ListComponent implements OnInit  {  

  // Constructor
  constructor(private studentService: StudentService,
              private dialog: MatDialog) { }

  ngOnInit(){
    this.fillList();
  }

  listStudent:StudentRes[] = [];
  termino:string=""
  showMessage:boolean = false;
  message!:string

  // Carga los estudiantes
  fillList(){
    this.studentService.getStudent().subscribe(resp =>{
      this.listStudent = resp.Data
    });
  }

  // Para remover un usuario
  removeStudent(id:number,name:string,lastname:string){
    // Abre el diablogo
    const result = this.dialog.open(MessageDeleteDialogComponent,{
      width: '350px',
      data: name.concat(" ",lastname) // Se envia el nombre del estudiante
    });

    // Evaluamos la respuesta del dialogo
    result.afterClosed().subscribe(
      resp =>{
        if(resp){
          this.studentService.removeStudent(id).subscribe(resp =>{
            location.reload();
            console.log(resp);
          })
        }
      }
    )
  }

  // Realiza la busqueda
  searchStudent(termino: string){
    if(termino.length == 0)
      this.fillList();
    else
      this.studentService.searchStudent(termino).subscribe(resp =>{
        this.listStudent = resp.Data;
      }, err => {
        if(err.error.Success === false){
          this.showMessage = true;
          this.message = err.error.Mensaje;
        }
      })
    }

    reset(){
      this.showMessage = false
    }


}
