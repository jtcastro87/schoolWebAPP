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
      Gender:'Choose',
      Age:0,
  }

  private edit:boolean = false;
  showAlert!:boolean;
  typeAlert!: string;
  message!:string;
  title:string = "Add new student";   

  // Para agregar
  SaveStudent(){

    if(this.student.Name === "" || this.student.Lastname === ""
      || !(this.student.Age > 0)){
        this.message = "All fields are required."
        this.typeAlert = "warning"
        this.showAlert = true;
        return
      }
   
    else if( !this.student.Id ){
      
      this.studenService.addStudent(this.student)
                        .subscribe(resp =>{
                          if(resp.Success){
                            this.typeAlert = "success"
                            this.message = "Save student success!"
                            this.showAlert =  true;
                          }
                        })
      this.student = {
        Name:'',
        Lastname:'',
        Gender:'Choose',
        Age:0,
      }

    }
    else{
      this.studenService.updateStudent(this.student)
          .subscribe(resp =>{
            if(resp.Success)
              this.typeAlert = "success"
              this.message = "Save student success!"
              this.showAlert = true;
            console.log(resp)
          })      
      // location.reload()   
       
    }

  }
  
  

}
