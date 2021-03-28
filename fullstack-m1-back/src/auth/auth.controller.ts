import { NextFunction, Request, Response } from 'express';
import { authService } from './auth.service';

class AuthController {

  login(req: Request, res: Response, next: NextFunction): void {
    const credentials = req.body;
    authService.login(credentials)
      .then(dto => res.json(dto))
      .catch(next);
  }
}

export const authController = new AuthController();
