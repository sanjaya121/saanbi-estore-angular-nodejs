import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { JSPracticeComponent } from './components/routes/jspractice/jspractice.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  
  {
    path:"",
    component:HomeComponent,
    title:"Home",
   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
