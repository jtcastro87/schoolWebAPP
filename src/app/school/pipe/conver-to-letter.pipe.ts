import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converToLetter'
})
export class ConverToLetterPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
   /*
    if(value >= 90 )
      calificacion = 'A';
    else if(value >= 80 && value < 89)
      calificacion = 'B';
    else if(value >= 70 && value < 79)
      calificacion = 'C';
    else
      calificacion = 'D'*/
    
    return (value >= 90 ) ? 'A'
  

}
