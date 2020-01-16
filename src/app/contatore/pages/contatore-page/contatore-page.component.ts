import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contatore-page",
  templateUrl: "./contatore-page.component.html",
  styleUrls: ["./contatore-page.component.scss"]
})
export class ContatorePageComponent implements OnInit {
  contatori = [{ titolo: "rosso" }, { titolo: "bianco" }, { titolo: "nero" }];
  constructor() {}

  ngOnInit() {}
}
