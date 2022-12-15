import { AfterContentInit, ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { SideMenuItem } from '../../projects/plx-inputs/src/lib/side-menu/side-menu.component';

@Component({
  selector: 'plx-input-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterContentInit {
  @ViewChild('abc', { static: true }) abc: TemplateRef<any>;
  @ViewChild('lineBreak', { static: true }) lineBreak: TemplateRef<any>;
  sideMenuItems: SideMenuItem[] = null;
  darkMode = false;
  public darkTheme = {
    'background-color-1': '#1f2b34',
    'background-color-2': '#262626',
    'text-color-primary': '#dcdcdc',
    'text-color-light': '#c2c2c2',
    'card-background-color': '#1f2b34',
    border: '1px solid #7f9da5',
    'low-contrast': '#515151',
    'warning-red': '#e32458',
    'table-stripe-color': '#303C44',
    'table-row-background-color-1': '#1f2b34',
    'table-row-background-color-2': '#262626',
    'table-row-background-color-3': '#cee9f0',
  };

  public lightTheme = {
    'background-color-1': '#ffffff',
    'background-color-2': '#F7F7F7',
    'text-color-primary': '#1f2b34',
    'text-color-light': '#ffffff',
    'card-background-color': '#ffffff',
    border: '1px solid #7f9da5',
    'low-contrast': '#bdbdbd',
    'warning-red': '#e32458',
    'table-stripe-color': '#f2f6f7',
    'table-row-background-color-1': '#ffffff',
    'table-row-background-color-2': '#e7f6fa',
    'table-row-background-color-3': '#cee9f0',
  };

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterContentInit() {
    this.sideMenuItems = [
      {
        displayText: 'Prime Inputs',
        link: '/prime-inputs',
        icon: 'lien-search',
        active: false,
        subItems: [],
        class: 'prime-inputs-menu',
        display: true,
        notifications: 0,
        customTemplate: null,
      },
      {
        displayText: 'Orders',
        link: '/orders',
        icon: 'lien-search',
        active: false,
        subItems: [],
        class: 'prime-inputs-menu',
        display: true,
        notifications: 0,
        customTemplate: null,
      },
      {
        displayText: 'Create Account',
        link: '/create-account',
        icon: 'plus',
        active: false,
        subItems: [],
        class: 'prime-inputs-menu',
        display: true,
        notifications: 0,
        customTemplate: null,
      },
      {
        displayText: 'Icons',
        link: '/icons',
        icon: 'administration',
        active: false,
        subItems: [],
        class: 'icons-menu',
        display: true,
        notifications: 0,
        customTemplate: null,
      },
      {
        displayText: 'Top-tab',
        link: '/top-tab',
        icon: 'invoices',
        active: false,
        subItems: [],
        class: 'top-tab-menu',
        display: true,
        notifications: 0,
        customTemplate: null,
      },
      {
        displayText: 'Common Components',
        link: '/buttons',
        icon: 'lien-search',
        active: false,
        subItems: [],
        class: 'button-menu',
        display: true,
        notifications: 0,
        customTemplate: null,
      },
      {
        displayText: 'Accordion',
        link: '/accordion',
        icon: 'orders',
        active: false,
        subItems: [],
        class: 'accordion-menu',
        display: true,
        notifications: 0,
        customTemplate: null,
      },
      {
        displayText: 'Dynamic Form',
        link: '/dynamic-forms',
        icon: 'orders',
        active: false,
        subItems: [],
        class: 'unauthorized-menu',
        display: true,
        notifications: 0,
        customTemplate: null,
      },
      {
        displayText: 'Custom Menu Item',
        link: '/prime-inputs',
        icon: 'dashboard',
        active: false,
        subItems: [],
        class: 'custom-menu',
        notifications: 0,
        display: true,
        customTemplate: this.abc as TemplateRef<any>,
      },
      {
        displayText: 'Custom Menu Item',
        link: '/prime-inputs',
        icon: 'dashboard',
        active: false,
        subItems: [],
        class: 'custom-menu',
        display: true,
        notifications: 0,
        customTemplate: this.lineBreak as TemplateRef<any>,
      },
      {
        displayText: 'Unauthorized',
        link: '/',
        icon: 'close',
        active: false,
        subItems: [],
        class: 'unauthorized-menu',
        display: false,
        notifications: 0,
        customTemplate: null,
      },
    ];
  }

  toggleTheme(event) {
    if (event === true) {
      this.setTheme(this.darkTheme);
    } else {
      this.setTheme(this.lightTheme);
    }
  }

  setTheme(theme) {
    Object.keys(theme).forEach((k) => document.documentElement.style.setProperty(`--${k}`, theme[k]));
  }
}
