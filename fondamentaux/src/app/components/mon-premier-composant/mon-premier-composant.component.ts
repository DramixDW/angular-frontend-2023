import { Component } from '@angular/core';
import { MoviesService, Movie } from '../../services/movies.service';

@Component({
  //fonctionne comme un selecteur css
  selector: '.premierComposant',
  //chemin vers le fichier html lié à ma class
  templateUrl: './mon-premier-composant.component.html',
  // On peut écrire l'html directement dans le composant
  // si on remplace templateUrl par template
  // /!\ je vous le conseille pas pour autant
  // template: `
  //     <div>
  //       J'existe, je vous promets.
  //     </div>
  // `,
  styleUrls: ['./mon-premier-composant.component.css'],
  //Pareil ça existe
  //mais pas génial
  // styles: [`
  //   .red {
  //     background-color: red
  //   }
  // `]
})
export class MonPremierComposantComponent {
  // On va utiliser cette propriété et l'afficher dans
  // notre html
  criDeVictoire = 'Hourra !'
  declare movies: Movie[];

  constructor(private moviesService: MoviesService) {
    this.movies = this.moviesService.getAllMovies();
  }

  

  //retourne banane en chaine de caractères
  getBanane() {
    return 'banane';
  }
}
