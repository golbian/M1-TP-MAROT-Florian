import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { MovieService } from 'src/app/services/movie.service';

import { IMovie } from '../movie.model';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  movie: IMovie= {
    title: '',
    imageUrl: '',
    year: 0
  };
  submitted = false;

  constructor(private movieService: MovieService, private messageService:MessageService) { }

  ngOnInit(): void {
  }

  saveMovie(): void {
    const movie:IMovie = {
      title: this.movie.title,
      imageUrl: this.movie.imageUrl,
      year: this.movie.year
    };

    this.movieService.create(movie)
      .subscribe(
        response => {
          this.messageService.open(response.message)
          this.submitted = true;
        },
        error => {
          this.messageService.open(error.message)
        });
  }

  newMovie(): void {
    this.submitted = false;
    this.movie = {
      title: '',
      imageUrl: '',
      year: 0
    };
  }

}
