import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mia-layout',
  styles: [
    `
      :host {
        display: grid;
        grid-template: 10rem 1fr/ 4fr 1fr;
        grid-template-areas: "top top" "main side";
      }
      .headerblock {
        grid-area: top;
      }
      .sideblock {
        background-color: aqua;
        grid-area: side;
      }
      .contentblock {
      }
    `,
  ],
  template: `
    <mia-header class="headerblock"></mia-header>
    <ng-content class="contentblock"></ng-content>
    <div class="sideblock">sidebar</div>
  `,
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
