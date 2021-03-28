import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterListComponent } from './character/character-list/character-list.component';
import { CharacterDetailsComponent } from './character/character-details/character-details.component';
import { AddCharacterComponent } from './character/add-character/add-character.component';
import { AddMovieComponent } from './movie/add-movie/add-movie.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'characters', pathMatch: 'full' },
  { path: 'characters', component: CharacterListComponent },
  { path: 'characters/:_id', component: CharacterDetailsComponent },
  { path: 'add-character', component: AddCharacterComponent },
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/:_id', component: MovieDetailsComponent },
  { path: 'add-movie', component: AddMovieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
