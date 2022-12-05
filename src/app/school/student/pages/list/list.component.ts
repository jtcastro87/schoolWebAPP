import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/school/services/student.service';
import { Student, StudentResponse } from '../../interfaces/student.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})

export class ListComponent implements OnInit  {

  listStudent:Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(){
    this.studentService.getStudent().subscribe(resp =>{
      this.listStudent = resp.Data
    });
  }



}
