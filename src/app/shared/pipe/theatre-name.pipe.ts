import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'theatreName'
})
export class TheatreNamePipe implements PipeTransform {

  transform(id: number): string {
    if (id === 1) {
      return 'Cosmos, In Orbit';
    } else if (id === 2) {
      return 'PVR, Oberoi';
    } else if (id === 3) {
      return 'IMax, Palladium';
    }
  }

}
