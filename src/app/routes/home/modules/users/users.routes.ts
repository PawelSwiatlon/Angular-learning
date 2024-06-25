import { Routes } from '@angular/router';
import { UsersLayoutComponent } from './layout/users-layout.component';


export const USERS_ROUTES: Routes = [
  {
    path: '',
    component: UsersLayoutComponent,
    children: [
      { path: '**', redirectTo: '' },
    ]
  },
];
