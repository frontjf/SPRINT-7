import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';



const routes: Routes = [
  
    { path: '', component: WelcomeComponent }, // Ruta para el componente Welcome
    { path: 'home', component: HomeComponent }, // Ruta para el componente Home
    { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
