import { AbstractRepository } from '../common/abstract.repository';
import store from './movie.json';
import { IMovie } from './movie.model';

class MovieRepository extends AbstractRepository<IMovie> {
  
  protected get store(): Promise<IMovie[]> {
    return Promise.resolve(store)
  }
}

export const movieRepository = new MovieRepository();
