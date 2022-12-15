import { Component } from '@angular/core';
import { Icons } from '../../../../projects/plx-inputs/src/lib/styles/svg-font/icons';

@Component({
  selector: 'plx-input-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
})
export class IconsComponent {
  public icons = Icons;
  constructor() {}
}
