import { Component } from '@angular/core';

enum Star {
    EMPTY = '☆',
    FILLED = '★'
}

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  star = Star.EMPTY;
  isEmpty = false;

  toggleIsFavorite() {
    this.star = this.star === Star.EMPTY ? Star.FILLED : Star.EMPTY  
  }
}
