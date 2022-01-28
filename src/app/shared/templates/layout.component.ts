import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mia-layout',
  styles: [],
  template: `
    <mia-header></mia-header>
    <ng-content></ng-content>
  `,
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
