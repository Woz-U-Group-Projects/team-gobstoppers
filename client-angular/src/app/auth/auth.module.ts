import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ FormsModule} from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import {BidDisplayComponent } from './components/bid-display/bid-display.component';
 //clean up spelling typos and filenames


@NgModule({
  declarations: [LoginComponent, RegisterComponent, ResetPasswordComponent, BidDisplayComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  exports:[ LoginComponent, //clean up typos -SGar
     RegisterComponent, 
     ResetPasswordComponent,
     BidDisplayComponent
]
})
export class AuthModule { }
