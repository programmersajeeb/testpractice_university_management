import { NextFunction, Request, Response } from 'express';
import { IGenericErrorMessage } from '../../Interfaces/error';
import config from '../../config';
import { Error } from 'mongoose';

const globalMiddlewares = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(400).json({ err: err });

  const statusCode = 500;
  const message = 'something went wrong';
  const errorMessage: IGenericErrorMessage[] = [];

  res.status(statusCode).json({
    success: false,
    message,
    errorMessage,
    stack: config.env !== 'production' ? err?.stack : undefined,
  });

  next();
};

export default globalMiddlewares;
