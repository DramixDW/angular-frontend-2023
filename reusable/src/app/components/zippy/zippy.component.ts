import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  // Mon zippy component va gagner un attribut title
  // qui permettra de définir notre propriété
  @Input() declare title: string;
  @Input() isContentVisible = false;
  @Input() declare manager: string;
  @Input() declare clickCount: number;
  @Output() titleClicked = new EventEmitter();

  toggleContentVisibility() {
    this.titleClicked.emit();
    this.isContentVisible = !this.isContentVisible;
  }
}
