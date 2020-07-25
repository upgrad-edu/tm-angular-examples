import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): string {
    const inputMinutes = value ? value : 0;
    const hours = Math.floor(value / 60);
    const minutes = inputMinutes % 60;
    return `${hours} hr ${minutes} mins`;
  }
}
