import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'jugador',
    pathMatch: 'full',
  },

  {
    path: 'jugador',
    loadComponent: () => import('./jugador/jugador.component').then((m) => m.JugadorComponent),

  },

  {
    path: 'preguntas',
    loadComponent: () => import('./preguntas/preguntas.component').then((m) => m.PreguntasComponent),

  },


  {
    path: 'partidas',
    loadComponent: () => import('./partidas/partidas.component').then((m) => m.PartidasComponent),

  },


];
