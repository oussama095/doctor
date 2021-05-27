import {NgModule} from '@angular/core';

import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {HeaderModule} from '../../shared/module/header/header.module';
import {SideNavModule} from '../../shared/module/side-nav/side-nav.module';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,

    HeaderModule,
    SideNavModule,

  ],
  bootstrap: [HomeComponent]
})
export class HomeModule {
}
