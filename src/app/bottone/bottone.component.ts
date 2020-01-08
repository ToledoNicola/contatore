import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-bottone",
  templateUrl: "./bottone.component.html",
  styleUrls: ["./bottone.component.scss"]
})
export class BottoneComponent implements OnInit {
  public pippo: string = "rosso";
  @Input() stringaPadre = "ciao";

  constructor() {}

  ngOnInit() {}
}
