import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContatoreRoutingModule } from "./contatore-routing.module";
import { ContatoreCardComponent, ContatoreComponent } from "./components";
import { ContatorePageComponent } from "./pages";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    ContatoreComponent,
    ContatoreCardComponent,
    ContatorePageComponent
  ],
  imports: [CommonModule, ContatoreRoutingModule, SharedModule]
})
export class ContatoreModule {}
