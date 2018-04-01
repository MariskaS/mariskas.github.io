import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [FooterComponent, SidebarComponent, HeaderComponent],
  declarations: [FooterComponent, SidebarComponent, HeaderComponent],
  providers: []
})
export class CoreModule {
}
