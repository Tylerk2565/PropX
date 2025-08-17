import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
  },
  // { path: '**', 
  //   loadComponent: () => import('./features/errors/not-found/not-found.component').then(m => m.NotFoundComponent)
  // },
];
