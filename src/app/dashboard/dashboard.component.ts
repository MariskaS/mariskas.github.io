import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dh-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  isAddTheme: boolean  = false;

  constructor() { }

  ngOnInit() {
  }

  addTheme() {
    this.isAddTheme = !this.isAddTheme;
  }

  cancelAddTheme() {
    this.isAddTheme = !this.isAddTheme;
  }
}
