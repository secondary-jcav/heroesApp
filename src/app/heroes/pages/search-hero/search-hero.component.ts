import { Component } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Hero } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html',
})
export class SearchHeroComponent {
  constructor(private heroService: HeroesService) {}
  searchTerm: string = '';
  foundHeroes: Hero[] = [];
  selectedHero: Hero | undefined;
  heroeSearch() {
    this.heroService
      .getHeroSuggestions(this.searchTerm.trim())
      .subscribe((heroes) => (this.foundHeroes = heroes));
  }

  heroSelected(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      this.selectedHero = undefined;
      return;
    }
    const hero: Hero = event.option.value;
    this.searchTerm = hero.superhero;
    this.heroService
      .getOneHero(hero.id!)
      .subscribe((hero) => (this.selectedHero = hero));
  }
}
