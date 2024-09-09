import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

import { RegistrationComponent } from './registration/registration.component';
import { DisplayComponent } from './display/display.component';
export const routes: Routes = [
 
  
  { path: 'register', component: RegistrationComponent },
  { path: 'display', component: DisplayComponent},
  // wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
