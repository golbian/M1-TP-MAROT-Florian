import { NextFunction, Request, Response } from 'express';
import { ErrorType, IAppError } from './error.model';

export const errorMiddleware = (error: IAppError, request: Request, response: Response, next: NextFunction): void => {
  const statusCode = getStatusCode(error);
  const message = getMessage(error);
  const type = getType(error);
  response.status(statusCode);
  response.json({ type, message });
};

const getStatusCode = (error: IAppError): number => {
  switch (error?.type) {
    case ErrorType.resourceIdFormat:
      return 400;
    case ErrorType.resourceIdNotFound:
    case ErrorType.resourceTypeNotFound:
      return 404;
    case ErrorType.invalidCredentials:
      return 401;
    case ErrorType.unhandledError:
    default:
      return 500;
  }
};

const getMessage = (error: IAppError): string => {
  switch (error?.type) {
    case ErrorType.resourceIdFormat:
      return 'Resource id must be an integer';
    case ErrorType.resourceIdNotFound:
      return `Resource with id=${error.messageParam} does not exist`;
    case ErrorType.resourceTypeNotFound:
      return `Resource type ${error.messageParam} does not exist`;
    case ErrorType.invalidCredentials:
      return 'Credentials are invalid';
    case ErrorType.unhandledError:
    default:
      return 'Unhandled error';
  }
};

const getType = (error: IAppError): ErrorType => {
  return error?.type || ErrorType.unhandledError;
};
