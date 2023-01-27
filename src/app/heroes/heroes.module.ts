import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { SearchHeroComponent } from './pages/search-hero/search-hero.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    AddHeroComponent,
    SearchHeroComponent,
    HeroComponent,
    HomeComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HeroesRoutingModule,
    MaterialModule,
  ],
})
export class HeroesModule {}
