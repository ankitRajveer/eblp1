import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eblp1';
  hamburgerClicked: boolean = false;

  onMenuClick(): void {
    this.hamburgerClicked = !this.hamburgerClicked;
  }
}
