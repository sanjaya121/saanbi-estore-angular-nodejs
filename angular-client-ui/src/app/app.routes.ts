import { Routes } from '@angular/router';
import { AuthComponent } from './authentication/auth.component';
import { HomeComponent } from './home/home.component';
import { authGaurd} from './auth-gaurds/auth-gaurd.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CodilityComponent } from './home/components/routes/codility/codility.component';
import { JSPracticeComponent } from './home/components/routes/jspractice/jspractice.component';
import { ProductDetailsComponent } from './home/components/routes/products/product-details/product-details.component';
import { ShoppigCartComponent } from './home/components/routes/shoppig-cart/shoppig-cart.component';


export const routes: Routes = [

    // {
    //     path: "",
    //     component:HomeComponent,
    //     loadChildren: () => import('./home/home.module').then(m => m.HomeModule)

    // },
    // {
    //     path: "auth",
    //     component:AuthComponent,
    //     loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule),
    // },
    // {
    //     path: "dashboard",
    //     component:DashboardComponent,
    //     loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    //     // canActivate:[authGaurd]
    // },

    {
        path: "",
        component: HomeComponent,
        title: "Product Details"
    },
    {
        path: "products/:id",
        component: ProductDetailsComponent,
        title: "Product Details"
    },
    {
        path: "shopping-cart",
        component: ShoppigCartComponent,
        title: "Shpping Cart"
    },
    {
        path: "js-challenge",
        component: JSPracticeComponent,
        title: "JS Challenge"
    },
    {
        path: "codility-challenge",
        component: CodilityComponent,
        title: "JS Challenge"
    }

];
