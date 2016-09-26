import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'heroes', // маршрутизатор соответствует пути данного маршрута к URL в адресной строке браузер (heroes).
        component: HeroesComponent //компонент, который маршрутизатор должен создать при навигации по этому маршруту (HeroesComponent).
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
//RouterModule.forRoot - Этот метод возвращает настроенный модуль маршрутизатора, который мы добавим в наш корень NgModule, AppModule.
//forRoot - Мы называем метод forRoot, потому что мы обеспечиваем настроенный маршрутизатор в корневом каталоге приложения. Метод forRoot дает нам поставщикам услуг Router и директивы, необходимые для маршрутизации.