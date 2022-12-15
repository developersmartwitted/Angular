import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'plx-input-top-tabs',
  templateUrl: './top-tabs.component.html',
  styleUrls: ['./top-tabs.component.scss'],
})
export class TopTabsComponent implements OnInit {
  public activeTab = 1;

  constructor() {}

  ngOnInit(): void {}
}
