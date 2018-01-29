import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

import { Link } from '../interfaces/link';

@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.scss']
})
export class LeftNavigationComponent implements OnInit {

  links: Array<Link> = [];

  constructor() { }

  ngOnInit() {
    this.links = [
      { label: 'Real Time Data', target: '/real-time-data' },
      { label: 'My Profile', target: '/profile' },
      { label: 'Settings', target: '/settings' },
    ];
  }

}
