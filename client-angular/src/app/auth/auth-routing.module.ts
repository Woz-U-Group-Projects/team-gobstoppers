import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent} from './components/reset-password/reset-password.component';
import { BidDisplayComponent } from './components/bid-display/bid-display.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: 'bid-display', component: BidDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
