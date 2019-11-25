import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'dob'})
export class KeysPipe implements PipeTransform {
  transform(value:any){
   
   
    return value;
  }
}