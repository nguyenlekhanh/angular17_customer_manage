import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CustomerComponent } from './components/customer/customer.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'customer', loadComponent: () => import('./components/customer/customer.component').then(m=>m.CustomerComponent)}
];
