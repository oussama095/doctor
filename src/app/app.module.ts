import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToolbarComponent} from './shared/component/toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDialogModule} from '@angular/material/dialog';
import {NotificationDialogComponent} from './shared/component/notification-dialog/notification-dialog.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {Interceptor} from './shared/service/interceptor/interceptor';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NotificationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
