import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  colors = ['purple', 'purpleButBetter', 'violet', 'lavender', 'lilas'];
  viewmode = 'banane'
}
