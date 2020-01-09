import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "basic";

  handleEvent(testo: string) {
    console.log("testo ricevuto dal figlio:", testo);
  }
}
