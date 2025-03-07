import { Routes } from '@angular/router';
import { AuthComponent } from './authentication/auth.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationModule } from './authentication/authentication.module';


export const routes: Routes = [

    {
        path: "",
        component:HomeComponent,
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)

    },
    {
        path: "auth",
        component:AuthComponent,
        loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)

    }
    // {
    //     path: "products/:id",
    //     component: ProductDetailsComponent,
    //     title: "Product Details"
    // },
    // {
    //     path: "shopping-cart",
    //     component: ShoppigCartComponent,
    //     title: "Shpping Cart"
    // },
    // {
    //     path: "js-challenge",
    //     component: JSPracticeComponent,
    //     title: "JS Challenge"
    // },
    // {
    //     path: "codility-challenge",
    //     component: CodilityComponent,
    //     title: "JS Challenge"
    // }

];
