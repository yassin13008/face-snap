import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {registerLocaleData} from '@angular/common'
import * as fr from '@angular/common/locales/fr'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnapsListComponent } from './face-snaps-list/face-snaps-list.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    FaceSnapsListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide : LOCALE_ID, useValue : 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    registerLocaleData(fr.default)
  }
}
