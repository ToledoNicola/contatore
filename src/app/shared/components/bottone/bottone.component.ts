import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-bottone",
  template: `
    <button (click)="handleClick()">
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ["./bottone.component.scss"]
})
export class BottoneComponent implements OnInit {
  @Output() onEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  handleClick() {
    this.onEvent.emit();
  }
}
