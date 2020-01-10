import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ParagrafoComponent } from "./paragrafo/paragrafo.component";
import { ContatoreComponent } from "./contatore/contatore.component";
import { BottoneComponent, TitoloComponent } from "./components";

@NgModule({
  declarations: [
    AppComponent,
    BottoneComponent,
    TitoloComponent,
    ParagrafoComponent,
    ContatoreComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
