import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './layout/home-layout.component';


export const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      // loadChildren: () => import('./routes/new.routes').then((m) => m.NAME_ROUTES),
      { path: '**', redirectTo: '' },
    ]
  },
];
