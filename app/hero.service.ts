import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> { // верни мне обещание выдать список типа Hero
        return Promise.resolve(HEROES); // верни мне обещание "вернуть список"
    }
    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
        /*.then(heroes => {
         return heroes.find(hero => hero.id === id);
         });*/
    }
}
