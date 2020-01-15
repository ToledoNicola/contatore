import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-contatore-card",
  templateUrl: "./contatore-card.component.html",
  styleUrls: ["./contatore-card.component.scss"]
})
export class ContatoreCardComponent implements OnInit {
  @Input("contatoreObj") contatore;
  constructor() {}

  ngOnInit() {}
}
