import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProfileInformationComponent} from './profile-information/profile-information.component';
import {SettingsComponent} from './settings/settings.component';

const profileRoutes: Routes = [

  {path: '', component: ProfileInformationComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(profileRoutes),
  ], exports: [
    RouterModule
  ]
})
export class ProfileRoutingModule {
}
