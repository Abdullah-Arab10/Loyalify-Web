import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('../app/auth/auth-routing.module').then(
        (m) => m.AuthRoutingModule
      ),
  },

  {
    path: 'home',
    loadChildren: () =>
      import('../app/home/home-routing.module').then(
        (m) => m.HomeRoutingModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'users',
    loadChildren: () =>
      import('../app/users/users-routing.module').then(
        (m) => m.UsersRoutingModule
      ),
  },
  {
    path: 'offers',
    loadChildren: () =>
      import('../app/offers/offers-routing.module').then(
        (m) => m.OffersRoutingModule
      ),
  },
  {
    path: 'banners',
    loadChildren: () =>
      import('../app/banners/banners-routing.module').then(
        (m) => m.BannersRoutingModule
      ),
  },
  {
    path: 'stores',
    loadChildren: () =>
      import('../app/stores/stores-routing.module').then(
        (m) => m.StoresRoutingModule
      ),
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('../app/categories/categories-routing.module').then(
        (m) => m.CategoriesRoutingModule
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
];
