import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'songCount',
})
export class SongCountPipe implements PipeTransform {
  transform(value: string | number, ...args: unknown[]): string {
    if (typeof value === 'string') {
      value = parseInt(value, 10);
    }
    if (isNaN(value)) return;

    return value > 1 ? `${value} songs` : `${value} song`;
  }
}
