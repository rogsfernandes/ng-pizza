import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mia-icon-button',
  template: ` <ng-content></ng-content> `,
  styles: [],
})
export class IconButton implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
