import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, timer } from 'rxjs';
import { StudentService } from 'src/app/school/services/student.service';
import { Student } from '../../interfaces/Student.interface';
import { StudentID } from '../../interfaces/studentid.interface';



@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styles: [
    `
      label,
      .buttom
      {
        margin-bottom: 10px;
      }
      .form-group
      {
        margin-bottom: 20px;
      }
      .btn{
        width:100%;
      }
    `
  ]
})

export class AddStudentComponent implements OnInit {

  // Constructor
  constructor(
    private studenService: StudentService,
    private activateRoute: ActivatedRoute,
    private router:Router ) { }


ngOnInit(): void {
  this.activateRoute.params
      .pipe( 
        switchMap( ({ id }) => this.studenService.editStudent(id))
      )
      .subscribe(resp => { 
        this.title = "Edit student"       
        this.student = resp.Data;
        console.log(this.student)
      })
}

  // Object new student
  student:Student | StudentID = {
      Id:0,
      Name:'',
      Lastname:'',
      Gender:'',
      Age:0,
  }

  private edit:boolean = false;
  save:boolean = false;
  title:string = "Add new student";   

  // Para agregar
  SaveStudent(){
   
    if( !this.student.Id ){
      
      this.studenService.addStudent(this.student);
      this.save =  true;
      this.student = {
        Name:'',
        Lastname:'',
        Gender:'select',
        Age:0,
      }

    }
    else{
      this.studenService.updateStudent(this.student)
          .subscribe(resp =>{
            if(resp.Success)
              this.save = true;
            console.log(resp)
          })      
      // location.reload()   
       
    }

  }
  
  

}
