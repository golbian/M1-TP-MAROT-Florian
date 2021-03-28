export enum ErrorType {
  resourceIdFormat = 'RESOURCE_ID_FORMAT',
  resourceIdNotFound = 'RESOURCE_ID_NOT_FOUND',
  resourceTypeNotFound = 'RESOURCE_TYPE_NOT_FOUND',
  unhandledError = 'UNHANDLED_ERROR',
  invalidCredentials = 'INVALID_CREDENTIALS'
}

export interface IAppError {
  type: ErrorType;
  messageParam?: string | number;
}
