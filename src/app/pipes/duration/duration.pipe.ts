import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: string | number, ...args: unknown[]): string {
    if (typeof value === 'string') {
      value = parseInt(value, 10);
    }

    return moment.utc(value * 1000).format('HH:mm:ss');
  }
}
