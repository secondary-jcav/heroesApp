import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/heroes.interface';
@Pipe({
  name: 'heroImage',
})
export class HeroImagePipe implements PipeTransform {
  transform(superhero: Hero): string {
    return `assets/heroes/${superhero.id}.jpg`;
  }
}
