import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { MovieService } from 'src/app/services/movie.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: any;
  currentMovie = {
    _id: 0,
    title:"",
    imageUrl: "",
    year:0
  };
  currentIndex = -1;
  title = '';

  constructor(private movieService: MovieService, private messageService:MessageService) { }

  ngOnInit(): void {
    this.retrieveMovies();
  }

  retrieveMovies(): void {
    this.movieService.getAll()
      .subscribe(
        response => {
          this.movies = response.data;
          this.messageService.open(response.message)
        },
        error => {
          this.messageService.open(error.message)
        });
  }

  refreshList(): void {
    this.retrieveMovies();
    this.currentIndex = -1;
  }

  setActiveMovie(movie:any, index:number): void {
    this.currentMovie = movie;
    this.currentIndex = index;
  }

  searchTitle(): void {
    this.movieService.findByFirstTitle(this.title)
      .subscribe(
        response => {
          this.movies = response.data;
          this.messageService.open(response.message)
        },
        error => {
          this.messageService.open(error.message)
        });
  }
}
