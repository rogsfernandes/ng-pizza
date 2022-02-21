import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mia-link',
  template: `
    <a [routerLink]="[path]" [routerLinkActive]="activeClass"
      ><ng-content></ng-content
    ></a>
  `,
  styles: ['.link-active { font-weight: 700;}', 'a{ color: color }'],
})
export class LinkComponent {
  @Input() path = '';
  @Input() color = 'inherit';

  activeClass = 'active-link';

  constructor() {}
}
