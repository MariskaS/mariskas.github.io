import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { routes as DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { routes as ThemeRoutingModule } from './theme/theme-routing.module';

const routes: Routes = [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      ...DashboardRoutingModule,
      ...ThemeRoutingModule,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
