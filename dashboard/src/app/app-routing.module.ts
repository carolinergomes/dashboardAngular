import { PageCadastroComponent } from './core/components/page-cadastro/page-cadastro.component';
import { DefaultComponent } from './core/layout/default/default.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
  },
  {
    path: 'cadastro' ,
    component: PageCadastroComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
