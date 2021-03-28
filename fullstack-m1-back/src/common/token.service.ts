import { sign, verify } from 'jsonwebtoken';
import { IUser } from '../user/user.model';

const secretKey = 'abcdef';

export interface ITokenPayload {
  id: number;
  email: string;
}

export const generateToken = (tokenPayload: ITokenPayload): Promise<string> => {
  return new Promise((resolve, reject) => {
    sign(tokenPayload, secretKey, (error, token) => {
      if (error) {
        reject(error);
      } else {
        resolve(token);
      }
    });
  });
}

export const checkToken = (token: string): Promise<ITokenPayload> => {
  return new Promise((resolve, reject) => {
    verify(token, secretKey, (error, payload) => {
      if (error) {
        reject(error);
      } else {
        resolve(payload as ITokenPayload);
      }
    });
  });
}
