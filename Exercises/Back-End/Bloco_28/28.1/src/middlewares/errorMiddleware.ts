import { NextFunction, Request, Response } from 'express';
import errExpected from '../interfaces/erroExpected';

const errorMiddleware = (
  err: errExpected | any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err.code) {
    return res.status(err.code).json({ message: err.message });
  }
  return res.status(500).json({ message: 'Erro interno' });
};

export default errorMiddleware;
