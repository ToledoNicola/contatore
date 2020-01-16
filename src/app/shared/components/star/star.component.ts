import { Component, OnInit } from "@angular/core";
import { faStar } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-star",
  template: `
    <fa-icon [icon]="stella" [styles]="{ color: 'yellow' }"></fa-icon>
  `,
  styleUrls: ["./star.component.scss"]
})
export class StarComponent implements OnInit {
  stella = faStar;

  constructor() {}

  ngOnInit() {}
}
