import { Component, OnInit } from '@angular/core';
import { Hero, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-add-heroe',
  templateUrl: './add-heroe.component.html',
  styles: [
    `
      img {
        width: 100%;
      }
    `,
  ],
})
export class AddHeroComponent implements OnInit {
  constructor(
    private heroService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) {
      return;
    }
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroService.getOneHero(id)))
      .subscribe((hero) => (this.superhero = hero));
  }

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC Comics',
    },

    {
      id: 'Marvel Comics',
      desc: 'Marvel Comics',
    },
  ];

  superhero: Hero = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  };

  saveHeroData() {
    if (this.superhero.superhero.trim().length === 0) {
      return;
    }
    if (this.superhero.alter_ego.trim().length === 0) {
      return;
    }
    if (this.superhero.id) {
      this.heroService
        .updateHero(this.superhero)
        .subscribe((hero) => console.log('Updating', hero));
    } else {
      this.heroService.addHero(this.superhero).subscribe((hero) => {
        this.router.navigate(['/heroes/edit', hero.id]);
      });
    }
  }
}
