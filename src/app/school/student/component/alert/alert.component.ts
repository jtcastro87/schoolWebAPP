import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styles: [
  ]
})

export class AlertComponent {

  constructor() { }

  @Input()message!:string;
  
  @Input()showAlert!: boolean;

  @Input() typeAlert!:string;

}
