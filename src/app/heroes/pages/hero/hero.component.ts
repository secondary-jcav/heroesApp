import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }
    `,
  ],
})
export class HeroComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroService: HeroesService,
    private router: Router
  ) {}
  superhero!: Hero;
  heroId: string = '';
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroService.getOneHero(id)))
      .subscribe((resp) => (this.superhero = resp));
  }

  goBack() {
    this.router.navigate(['/heroes/list']);
  }
}
