import { MaterialModule } from './../../material/material/material.module';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const COMPONENTS = [
  FooterComponent,
  SidebarComponent,
  HeaderComponent
]

@NgModule({
  declarations: [
  COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    COMPONENTS
  ]

})
export class ComponentsModule { }


