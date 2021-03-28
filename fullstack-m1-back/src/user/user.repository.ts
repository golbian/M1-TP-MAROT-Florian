import { ModelNotFoundError } from '../common/error/repository-error.model';
import store from './user.json';
import { AbstractRepository } from '../common/abstract.repository';
import { IUser } from './user.model';

class UserRepository extends AbstractRepository<IUser> {
  protected get store(): Promise<IUser[]> {
    return Promise.resolve(store);
  }

  findByEmailAndPassword(email: string, password: string): Promise<IUser> {
    return this.store.then(models => {
      const user = models.find(model => model.email === email && model.password === password);
      if (user) {
        return user;
      }
      throw new ModelNotFoundError();
    });
  }
}

export const userRepository = new UserRepository();
