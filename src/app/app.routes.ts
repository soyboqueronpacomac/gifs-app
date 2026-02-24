import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./gifs/pages/dashboard-page/dashboard-page'),
    title: 'Dashboard',
    children: [
      {
        path: 'search',
        loadComponent: () => import('./gifs/pages/search-page/search-page'),
        title: 'Search',
      },
      {
        path: 'trending',
        loadComponent: () => import('./gifs/pages/trending-page/trending-page'),
        title: 'Trending',
      },
      {
        path: '**',
        redirectTo: 'trending',
      }
    ],
  },

  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
