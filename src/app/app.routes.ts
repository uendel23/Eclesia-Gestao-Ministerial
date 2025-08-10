
import { Routes } from '@angular/router';
import { Membros } from './membros/membros';
import { Dashboard } from './dashboard/dashboard';
import { Cadastro } from './cadastro/cadastro';

export const routes: Routes = [
  {path:'dashboard', component: Dashboard},
  {path:'membros', component: Membros},
  {path:'cadastro', component: Cadastro},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

];
