import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ formsModule} from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPassowrdComponent } from './components/reset-passowrd/reset-passowrd.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, ResetPassowrdComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    formsModule
  ],
  export:[ LoginComponent,
     RegisterComponent, 
     ResetPassowrdComponent
]
})
export class AuthModule { }
