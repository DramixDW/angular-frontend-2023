import { Injectable } from '@angular/core';

export interface Author {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor() { }

  getAllAuthors() {
    return [{
      name: 'Jules Vernes'
    }, {
      name: 'Daniel Defoe'
    }, {
      name: 'Emile Zola'
    }];
  }
}
