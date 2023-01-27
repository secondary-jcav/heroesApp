import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/heroes.interface';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
    `
      mat-card {
        margin-top: 20px;
      }
    `,
  ],
})
export class ListComponent implements OnInit {
  constructor(private heroesService: HeroesService) {}
  superHeroes: Hero[] = [];
  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe((resp) => {
      this.superHeroes = resp;
      //this.superHeroes = resp.map((x) => x.superhero);
    });
  }
}
