import { AbstractMapper } from '../common/abstract.mapper';
import { AbstractRepository } from '../common/abstract.repository';
import { AbstractService } from '../common/abstract.service';
import { movieMapper } from './movie.mapper';
import { IMovie, IMovieDto } from './movie.model';
import { movieRepository } from './movie.repository';

class MovieService extends AbstractService<IMovie, IMovieDto>{

  protected get repository(): AbstractRepository<IMovie> {
    return movieRepository;
  }

  protected get mapper(): AbstractMapper<IMovie, IMovieDto> {
    return movieMapper;
  }
}

export const movieService = new MovieService();
