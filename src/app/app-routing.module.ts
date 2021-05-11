import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // Routing functionality
import { HeroesComponent } from './heroes/heroes.component';


const routes: Routes =[
  // path matches URL string, component is the component the router should create
  { path: 'heroes', component: HeroesComponent }
]
// Initialize router 
@NgModule({
  imports: [
    RouterModule.forRoot(routes) // Using forRoot() because the router is configured at root level
  ],
  exports: [RouterModule] // Making the RouterModule available throughout the app
})
export class AppRoutingModule { }