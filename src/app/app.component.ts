import { Component } from '@angular/core';
import { Component} from 'ng2-page-slider';

export class Navigaton {
  id : number;
  menu: string;
}

const NAVIGATION: Navigaton[] = [
  { id: 11, menu: 'Main' },
  { id: 12, menu: 'About' },
  { id: 13, menu: 'Portfolio' },
  { id: 14, menu: 'Contact' }
];

@Component({
  selector: 'navigation',
  templateUrl: '../templates/navigation.html'
})
export class AppComponent {
  nav = NAVIGATION;
}

