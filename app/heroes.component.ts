import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
})
export class HeroesComponent implements OnInit {  //implements OnInit - импортировали метод OnInit
    heroes: Hero[]; // Возвращение фиктивного списка героев
    selectedHero: Hero;

    constructor(
        private router: Router,
        private heroService: HeroService) { } //одновременно определяет приватное свойство heroService и идентифицирует его как место внедрения HeroService

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    ngOnInit(): void { // вызывается ангуляром вовремя , при создании нашего компонента
        this.getHeroes();
    }
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
