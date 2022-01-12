import { Request, Response } from 'express';
import bodyRequest from '../interfaces/bodyLogin';
import erroCustom from '../interfaces/error';
import { loginService } from '../services/Login';

export const login = (req: Request, res: Response) => {
  try {
    const { password, username } = req.body as bodyRequest;
    const token = loginService({ password, username });
    return res.status(200).json(token);
  } catch (error: any) {
    console.log(error.message);
    return res.status(error.code).json({ message: error.message });
  }
};
