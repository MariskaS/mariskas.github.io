import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  `,
    styleUrls: ['hero-list.component.css'],
    providers: [HeroService] //массив сервисов который говорит ангуляру создавать новый экземпляр класса HeroService каждый раз когда создается новый appComponent
})
export class AppComponent implements OnInit {  //implements OnInit - импортировали метод OnInit
    title = 'Tour of Heroes';
    heroes: Hero[]; // Возвращение фиктивного списка героев
    selectedHero: Hero;
    constructor(private heroService: HeroService) { } //одновременно определяет приватное свойство heroService и идентифицирует его как место внедрения HeroService
    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    ngOnInit(): void { // вызывается ангуляром вовремя , при создании нашего компонента
        this.getHeroes();
    }
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}
