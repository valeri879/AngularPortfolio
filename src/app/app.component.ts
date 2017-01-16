import { Component } from '@angular/core';

export class Navigaton {
  id : number;
  menu: string;
}

const NAVIGATION: Navigaton[] = [
  { id: 11, menu: 'ვალერი' },
  { id: 12, menu: 'კოტე' },
  { id: 13, menu: 'გიგა' },
  { id: 14, menu: 'ლეონი' }
];

@Component({
  selector: 'navigation',
  templateUrl: '../templates/navigation.html'
})
export class AppComponent {
  title = 'app works! bitches';

  name = 'გიგა როგორ ხარ ?';

  nav = NAVIGATION;
}
