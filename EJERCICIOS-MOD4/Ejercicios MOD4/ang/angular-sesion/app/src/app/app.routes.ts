import { Routes } from '@angular/router';
import { AboutComponent } from './pages/public/about/about.component';
import { HomeComponent } from './pages/public/home/home.component';
import { LoginComponent } from './pages/public/login/login.component';
import { CrudComponent } from './pages/private/crud/crud.component';
import { DashboardComponent } from './pages/private/dashboard/dashboard.component';
import { GalleryComponent } from './pages/private/gallery/gallery.component';
import { ProfileComponent } from './pages/private/profile/profile.component';

export const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'about',
    component: AboutComponent,
  },

  {
    path: 'crud',
    component: CrudComponent,
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
  },

  {
    path: 'gallery',
    component: GalleryComponent,
  },

  {
    path: 'profile',
    component: ProfileComponent,
  },

  //  {
  //     path: '**',
  //     component: AboutComponent // aqui habria que poner una pagina de 404 que habria que crear,
  // }
];
