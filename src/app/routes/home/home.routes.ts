import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './layout/home-layout.component';


export const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {path:'', loadChildren: () => import('./modules/dashboard/dashboard.routes').then((m) => m.DASHBOARD_ROUTES), },
      {path:'users', loadChildren: () => import('./modules/users/users.routes').then((m) => m.USERS_ROUTES), },
      // {path:'products', loadChildren: () => import('./modules/dashboard/dashboard.routes').then((m) => m.DASHBOARD_ROUTES), },
      // {path:'recipes', loadChildren: () => import('./modules/dashboard/dashboard.routes').then((m) => m.DASHBOARD_ROUTES), },
      // { path: '**', redirectTo: '' },
    ]
  },
];
