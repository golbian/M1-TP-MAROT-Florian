import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    AddMovieComponent,
    MovieDetailsComponent,
    MovieListComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatCardModule,
    AppRoutingModule
  ],
  exports: [
    AddMovieComponent,
    MovieDetailsComponent,
    MovieListComponent
  ]
})
export class MovieModule { }
