import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatIconModule, MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    HttpClientModule
  ],
  exports: [
    FooterComponent,
    SidebarComponent,
    HeaderComponent
  ],
  declarations: [
    FooterComponent,
    SidebarComponent,
    HeaderComponent
  ],
  providers: []
})
export class CoreModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer
      .bypassSecurityTrustResourceUrl('./assets/svg/mdi.svg'));
  }
}
