import { Component } from '@angular/core';
import { Author, AuthorsService } from 'src/app/services/authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
    authors: Author[];

    constructor(private authorService: AuthorsService) {
      this.authors = this.authorService.getAllAuthors();
    }
}
