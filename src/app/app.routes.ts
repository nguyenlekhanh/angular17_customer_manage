import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './_services/auth.service';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'customer',
    loadComponent: () =>
      import('./components/customer/customer.component').then(
        (m) => m.CustomerComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'customer/add',
    loadComponent: () =>
      import('./components/addcustomer/addcustomer.component').then(
        (m) => m.AddcustomerComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'customer/edit/:code',
    loadComponent: () =>
      import('./components/addcustomer/addcustomer.component').then(
        (m) => m.AddcustomerComponent
      ),
    canActivate: [authGuard],
  },
];
