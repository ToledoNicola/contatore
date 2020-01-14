import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import {
  BottoneComponent,
  TitoloComponent,
  ParagrafoComponent,
  ContatoreComponent,
  StarComponent,
  RatingStarsComponent
} from "./components";
import { HomepageComponent } from "./containers";

@NgModule({
  declarations: [
    AppComponent,
    BottoneComponent,
    TitoloComponent,
    ParagrafoComponent,
    ContatoreComponent,
    HomepageComponent,
    RatingStarsComponent,
    StarComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
