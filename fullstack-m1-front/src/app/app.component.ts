import { Component } from '@angular/core';
import { ICharacter } from './character/character.model';
import { IMovie } from './movie/movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front';

  characters: ICharacter[] = [
    {
      firstName: 'Harry',
      lastName: 'Potter',
      birthYear: 1990
    },
    {
      firstName: 'Bilbo',
      lastName: 'Baggins',
      birthYear: 1900
    }
  ];

  movies: IMovie[] = [
    {
      title: 'Harry Potter',
      year: 2001,
      imageUrl: 'https://fr.web.img2.acsta.net/pictures/18/07/02/17/25/3643090.jpg'
    },
    {
      title: 'The Lord of the Rings',
      year: 2001,
      imageUrl: 'https://fr.web.img3.acsta.net/medias/nmedia/18/35/14/33/18366630.jpg'
    }
  ];
}
