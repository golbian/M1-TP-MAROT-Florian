import { AbstractController } from '../common/abstract.controller';
import { AbstractService } from '../common/abstract.service';
import { IMovie, IMovieDto } from './movie.model';
import { movieService } from './movie.service';

class MovieController extends AbstractController<IMovie, IMovieDto> {

  protected get service(): AbstractService<IMovie, IMovieDto> {
    return movieService;
  }
}

export const movieController = new MovieController();
