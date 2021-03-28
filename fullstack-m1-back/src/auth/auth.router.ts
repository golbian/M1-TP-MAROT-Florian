import { NextFunction, Request, Response, Router } from 'express';
import { authController } from './auth.controller';

export const authRouter = Router();

authRouter.post('/login', (req: Request, res: Response, next: NextFunction) => authController.login(req, res, next))
