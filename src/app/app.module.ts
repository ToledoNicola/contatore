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
  RatingStarsComponent,
  ContatoreCardComponent
} from "./components";
import { HomepageComponent, ContatorePageComponent } from "./pages";
import { NavbarComponent } from "./core";

@NgModule({
  declarations: [
    AppComponent,
    BottoneComponent,
    TitoloComponent,
    ParagrafoComponent,
    ContatoreComponent,
    HomepageComponent,
    RatingStarsComponent,
    StarComponent,
    NavbarComponent,
    ContatorePageComponent,
    ContatoreCardComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
