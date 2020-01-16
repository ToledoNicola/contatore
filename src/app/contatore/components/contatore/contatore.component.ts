import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contatore",
  template: `
    <h1>{{ contatore }}</h1>
    <app-bottone (onEvent)="handleButtonEvent()">
      <p>Incrementa</p>
    </app-bottone>
    <app-bottone (onEvent)="handleResetEvent()">
      <p>Reset</p>
    </app-bottone>
  `,
  styleUrls: ["./contatore.component.scss"]
})
export class ContatoreComponent implements OnInit {
  contatore: number = 0;

  constructor() {}

  ngOnInit() {}

  handleButtonEvent() {
    this.contatore++;
  }
  handleResetEvent() {
    this.contatore = 0;
  }
}
