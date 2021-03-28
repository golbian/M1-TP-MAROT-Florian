import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IMovie } from '../movie.model';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  currentMovie = {
    _id: "",
    title: "",
    imageUrl: "",
    year: 0
  };

  constructor(
    private movieService: MovieService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getMovie(this.route.snapshot.paramMap.get('_id'));
  }

  getMovie(id:any): void {
    this.movieService.get(id)
      .subscribe(
        response => {
          this.currentMovie = response.data;
          this.messageService.open(response.message)
        },
        error => {
          console.log(error);
        });
  }

  updateMovie(): void {
    this.movieService.update(this.currentMovie._id, this.currentMovie)
      .subscribe(
        response => {
          this.messageService.open(response.message)
        },
        error => {
          this.messageService.open(error.message)
        });
  }

  deleteMovie(): void {
    this.movieService.delete(this.currentMovie._id)
      .subscribe(
        response => {
          this.messageService.open(response.message)
          this.router.navigate(['/movies']);
        },
        error => {
          this.messageService.open(error.message)
        });
  }
}
