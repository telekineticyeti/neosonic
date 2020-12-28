import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: string | number, ...args: unknown[]): string {
    momentDurationFormatSetup(moment);
    if (typeof value === 'string') {
      value = parseInt(value, 10);
    }

    return moment.duration(value, 'seconds').format('h [hrs] m [mins]');
  }
}
