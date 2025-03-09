import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { authGaurd } from './auth-gaurds/auth-gaurd.guard';
import { LoginComponent } from './components/routes/login/login.component';
import { SignUpComponent } from './components/routes/sign-up/sign-up.component';



export const routes: Routes = [
    {
        path:"",
        component:HomeComponent,
        loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)

    },

    {
        path: "dashboard",
        component:DashboardComponent,
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate:[authGaurd]
    },
    {
        path:'login',
        component:LoginComponent,
        
    },
    {
        path:'signup',
        component:SignUpComponent
    }

   
];
