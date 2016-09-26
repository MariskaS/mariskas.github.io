import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }  from './heroes.component';
import { HeroService } from './hero.service';
import { routing } from './app.routing';

import { MyButtonComponent } from './button.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroesComponent,
        HeroDetailComponent,
        MyButtonComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
