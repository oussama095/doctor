import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {Interceptor} from './shared/service/interceptor/interceptor';
import {HeaderModule} from './shared/module/header/header.module';
import {ProfileModule} from './views/profile/profile.module';
import {AppointmentModule} from './views/appointment/appointment.module';
import {PageNotFoundComponent} from './shared/component/page-not-found/page-not-found.component';
import {MatButtonModule} from '@angular/material/button';
import {SideNavModule} from './shared/module/side-nav/side-nav.module';
import {ConfirmationDialogComponent} from './shared/component/confirmation-dialog/confirmation-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {TranscriptionModule} from './views/transcription/transcription.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HeaderModule,
    ProfileModule,
    AppointmentModule,
    TranscriptionModule,
    SideNavModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
