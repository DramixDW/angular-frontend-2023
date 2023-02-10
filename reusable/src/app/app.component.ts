import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reusable';
  clickCountPerAnimal = {
    "otter": 42,
    "bat": 36
  }

  handleClickTitle(title: string) {
    console.log(`${title} a été cliqué !`);
  }

  updateClickCount(animal: keyof typeof this.clickCountPerAnimal) {
    this.clickCountPerAnimal[animal] = this.clickCountPerAnimal[animal] + 1;
  }
}

