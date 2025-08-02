
import { Routes } from '@angular/router';
import { Membros } from './membros/membros';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
  {path:'dashboard', component: Dashboard},
  {path:'membros', component: Membros},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

];
