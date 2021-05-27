import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthenticationComponent} from './authentication.component';

const authenticationRoutes: Routes = [
  {
    path: '', component: AuthenticationComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authenticationRoutes)
  ],
  exports: [RouterModule]

})
export class AuthenticationRoutingModule {
}
