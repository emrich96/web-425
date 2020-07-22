/**
 * Title: app.routing.ts
 * Author: Emily Richter
 * Date: 22 July 2020
 * Description: App routing
 */

 import { Routes } from '@angular/router';
 import { SignInComponent } from './sign-in/sign-in.component';
 import { HomeComponent }from './home/home.component';

 export const AppRoutes: Routes = [
   {
     path: '',
     component: SignInComponent
   },
   {
     path:'home',
     component: HomeComponent
   }
 ]
