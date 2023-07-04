import { Request, Response, NextFunction } from 'express';
import { ApplicationError } from '../protocols';
import httpStatus from 'http-status';
import { STATUS_CODES } from 'http';

    export function handleApplicationError(
        err: ApplicationError | Error,
        _req: Request,
        res: Response,
        _next: NextFunction
      ) {
        if (err.name === 'Conflict' || err.name === 'DuplicateError') {
          return res.status(httpStatus.CONFLICT).send({
            message: err.message,
          });
        }
      
        if (err.message === 'data and salt arguments required') {
          return res.status(httpStatus.BAD_REQUEST).send({
            message: 'Missing or invalid password.',
          });
        }
      
        if (err instanceof Error) {
          return res.status(404).json({ message: err.message });
        };
      }
      
    
