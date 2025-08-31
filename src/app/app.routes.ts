import { Routes } from '@angular/router';
import { HomeComponent } from './pages/logged/home/home.component';
import { RegistrationComponent } from './pages/not-logged/registration/registration.component';
import { LoginComponent } from './pages/not-logged/login/login.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastre-se',
    component: RegistrationComponent
  }
];
