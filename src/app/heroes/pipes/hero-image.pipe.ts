import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/heroes.interface';
@Pipe({
  name: 'heroImage',
})
export class HeroImagePipe implements PipeTransform {
  transform(superhero: Hero): string {
    if (!superhero.id && !superhero.alt_img) {
      return 'assets/no-image.png';
    } else if (superhero.alt_img) {
      return superhero.alt_img;
    } else {
      return `assets/heroes/${superhero.id}.jpg`;
    }
  }
}
