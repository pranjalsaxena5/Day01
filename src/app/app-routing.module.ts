import { PhoneloginComponent } from './phonelogin/phonelogin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: SignupComponent},
  {path: 'home', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'userhome', component: HomeComponent},
  {path: 'phone', component: PhoneloginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
