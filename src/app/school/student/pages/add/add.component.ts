import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { StudentService } from 'src/app/school/services/student.service';
import { Student } from '../../interfaces/Student.interface';
import { StudentRes } from '../../interfaces/student-response.interface';
import { timeStamp } from 'console';
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
    private router:Router) { }


ngOnInit(): void {
  this.activateRoute.params
      .pipe( 
        switchMap( ({ id }) => this.studenService.editStudent(id))
      )
      .subscribe(resp => {        
        this.student = resp.Data;
        console.log(this.student)
        this.nameButtom = "Save"; 
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
  public nameButtom: string = "Add";
  save:boolean = false;   

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
            console.log(resp);
          })
      
      this.router.navigate(['./student'])
    }
    



  }


  

}
