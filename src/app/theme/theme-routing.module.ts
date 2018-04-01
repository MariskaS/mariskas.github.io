import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThemeComponent } from './theme.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'theme',
        component: ThemeComponent
      }
    ]
  }
];

@NgModule({
  exports: [RouterModule]
})
export class ThemeRoutingModule { }
