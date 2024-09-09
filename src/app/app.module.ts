import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterLink ,RouterOutlet} from '@angular/router';
import { FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { EmployeeService } from './services/employee.service';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterLink,ReactiveFormsModule,DisplayComponent,HttpClientModule,AppComponent,MenuComponent,RouterOutlet,RegistrationComponent,
  ],
  providers:[EmployeeService]
})
export class AppModule  { }
