import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reusable';

  handleClickTitle(title: string) {
    console.log(`${title} a été cliqué !`);
  }
}
