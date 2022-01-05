import { Response, Request, NextFunction } from 'express';

interface ErrExperted {
  status: number;
  message: String;
}

export default (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err.status) {
    return res.status(400).json({ message: err.message });
  }
  return res.status(500).json({ message: 'Internal Error!!' });
};
