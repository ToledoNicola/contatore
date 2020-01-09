import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paragrafo',
  template: `
    <p>
      paragrafo works!
    </p>
  `,
  styleUrls: ['./paragrafo.component.scss']
})
export class ParagrafoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
