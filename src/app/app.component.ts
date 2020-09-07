import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Podcast Listings';
  selectedTheme = false;

  // Get theme data from header component
  /* getTheme(data): void {
    console.log(data, 'data');
    this.selectedTheme = data;
  } */
}

