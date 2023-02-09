import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
  @Input('postTitle') title = 'Mon titre par défaut';
  // On peut utiliser un alias, qu'on passera en argument
  // de notre décorateur Output comme pour Input.
  // A ce moment là, c'est notre alias qu'on doit
  // écrire entre () pour lié notre événement à une 
  // fonction dans le composant parent
  @Output() clickTitle = new EventEmitter();

  clickedTitle() {
      this.clickTitle.emit(this.title);
  }
}
