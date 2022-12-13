import { MaterialModule } from './../../material/material/material.module';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsIntroComponent } from './dashboard/cards-intro/cards-intro.component';
import { TextComponent } from './text/text.component';
import { ItemsComponent } from './items/items.component';
import { ButtonComponent } from './button/button.component';
import { PageCadastroComponent } from './page-cadastro/page-cadastro.component';


const COMPONENTS = [
  SidebarComponent,
  DashboardComponent,
  CardsIntroComponent,
  TextComponent,
  ItemsComponent,
  ButtonComponent
]

@NgModule({
  declarations: [
  COMPONENTS,
  PageCadastroComponent
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


