import { ErrorType } from '../common/error/error.model';
import { generateToken } from '../common/token.service';
import { userRepository } from '../user/user.repository';
import { IAuthCredentials, IAuthToken } from './auth.model';

class AuthService {

  login(credentials: IAuthCredentials): Promise<IAuthToken> {
    return userRepository.findByEmailAndPassword(credentials.login, credentials.pwd)
      .then(user => generateToken(user))
      .then(token => ({ token }))
      .catch(error => {
        console.error(error);
        return Promise.reject({ type: ErrorType.invalidCredentials });
      })
  }

}

export const authService = new AuthService();
