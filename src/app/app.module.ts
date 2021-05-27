import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {Interceptor} from './shared/service/interceptor/interceptor';
import {PageNotFoundComponent} from './shared/component/page-not-found/page-not-found.component';
import {ConfirmationDialogComponent} from './shared/component/confirmation-dialog/confirmation-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
