import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-fund-page',
  templateUrl: './not-fund-page.component.html',
  styles: [`
    div{
      padding: 2rem 0;
    }
    h1{
      font-size: 4em;
      font-weight: normal;
      letter-spacing: 6px; 
    }

    h2{
      text-align: center;
      font-size: 3em;
    }
  `]
})
export class NotFundPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
