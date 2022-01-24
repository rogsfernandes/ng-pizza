import { Component, Input } from '@angular/core';

@Component({
  selector: 'mia-link',
  template: `
    <a [routerLink]="[path]" [routerLinkActive]="activeClass"
      ><ng-content></ng-content
    ></a>
  `,
  styles: ['.link-active { font-weight: 700;}'],
})
export class LinkComponent {
  @Input() path = '';

  activeClass = 'active-link';

  constructor() {}
}
