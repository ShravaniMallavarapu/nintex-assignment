import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'dateTime'
})
export class DateTimePipe implements PipeTransform {

  transform(value: any): any {
    return moment(value).format()
  }

}
