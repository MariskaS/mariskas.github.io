import {Component} from 'angular2/core'; // импортим функцию Component из библиотеки core
//[public || private || static] [property-name] [:property-type] [= value]
export class Hero {
    id: number;
    name: string;
}

@Component({ // декоратор или правильнее компонент. Внутри методанные
    selector: 'my-app',
    template:`
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name">
    </div>`
})

export class AppComponent {
    title = 'Tour of Heroes';
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
}

