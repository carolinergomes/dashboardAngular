import { MaterialModule } from './../../material/material/material.module';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardGraphComponent } from './card-graph/card-graph.component';
import { CardGraph2Component } from './card-graph2/card-graph2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Imagem0Component } from './imagem0/imagem0.component';
import { Imagem1Component } from './imagem1/imagem1.component';
import { Imagem2Component } from './imagem2/imagem2.component';
import { Imagem3Component } from './imagem3/imagem3.component';
import { Imagem4Component } from './imagem4/imagem4.component';
import { Imagem5Component } from './imagem5/imagem5.component';

const COMPONENTS = [
  SidebarComponent,
  CardGraphComponent,
  CardGraph2Component,
  DashboardComponent,
  Imagem0Component,
  Imagem1Component,
  Imagem2Component,
  Imagem3Component,
  Imagem4Component,
  Imagem5Component
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


