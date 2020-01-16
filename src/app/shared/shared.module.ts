import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  BottoneComponent,
  TitoloComponent,
  ParagrafoComponent,
  StarComponent,
  RatingStarsComponent
} from "./components";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    BottoneComponent,
    TitoloComponent,
    ParagrafoComponent,
    StarComponent,
    RatingStarsComponent
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    BottoneComponent,
    TitoloComponent,
    ParagrafoComponent,
    StarComponent,
    RatingStarsComponent
  ]
})
export class SharedModule {}
