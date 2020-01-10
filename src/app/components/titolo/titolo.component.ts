import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-titolo",
  template: `
    <h1 [innerHTML]="testoPadre"></h1>
  `,
  styleUrls: ["./titolo.component.scss"]
})
export class TitoloComponent implements OnInit {
  testo;
  @Input("testo") testoPadre: string;
  constructor() {}

  ngOnInit() {}
}
