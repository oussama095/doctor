import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './shared/component/page-not-found/page-not-found.component';
import {AuthGuard} from './shared/service/auth/auth.guard';


const routes: Routes = [

  {path: '', redirectTo: 'auth/login', pathMatch: 'full'},
  {
    path: 'auth',
    canActivate: [AuthGuard],
    loadChildren: () => import('./views/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)

  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes
    ),
  ],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
