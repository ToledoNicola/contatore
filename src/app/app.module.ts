import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottoneComponent } from './bottone/bottone.component';
import { TitoloComponent } from './titolo/titolo.component';
import { ParagrafoComponent } from './paragrafo/paragrafo.component';

@NgModule({
  declarations: [
    AppComponent,
    BottoneComponent,
    TitoloComponent,
    ParagrafoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
