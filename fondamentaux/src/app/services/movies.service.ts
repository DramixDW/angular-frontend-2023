import { Injectable } from '@angular/core';

export interface Movie {
  title: string;
  description: string;
}

/*
* Le décorateur injectable rend l'instance de ma classe
* connu par angular. Cette instance pourra être distribué
* à la demande dans nos composants
*/
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getAllMovies(): Movie[] {
    return [
      {
        title: 'Forrest Gump',
        description: 'Il court mais pas la maladie d\'amour'
      },
      {
        title: 'Alice au pays des merveilles',
        description: 'Le lapin en retard est probablement votre formateur' 
      },
      {
        title: 'L\'attaque des bananes martiennes',
        description: 'Un film pas terrible'
      }
    ];
  }
}
