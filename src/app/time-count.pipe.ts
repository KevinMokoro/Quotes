import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:any = new Date();
    var dateDifference = Math.abs(value-today)

    var dateDifferenceSeconds=dateDifference*0.001;
    var dateCounter = dateDifferenceSeconds
    if (dateCounter >= 1 && value > today){
        return dateCounter;
    }else{
        return 0;
    }
  }

}
