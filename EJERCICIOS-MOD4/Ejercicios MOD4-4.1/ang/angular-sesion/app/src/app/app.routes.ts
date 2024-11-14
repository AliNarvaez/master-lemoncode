import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user/user-list/user-list.component';

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
    path: 'contact',
    component: ContactComponent,
 },

 {
    path: 'users',
    component: UserListComponent,
 },

 {
    path: '**',
    component: AboutComponent // aqui habria que poner una pagina de 404 que habria que crear,
}
 
];
