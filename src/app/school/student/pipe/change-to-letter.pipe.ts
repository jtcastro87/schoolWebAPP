import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeToLetter'
})

export class ChangeToLetterPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): any {
    let calificacion:string = ""

    if(value >=90 )
      return 'A'
    else if(value >=80 )
      return 'B'
    else if(value >=70 )
      return 'C'
    else
      return 'F'

  }

}
