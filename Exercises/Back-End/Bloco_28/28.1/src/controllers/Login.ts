import { createUserService, updateUserService } from './../services/Login';
import { NextFunction, Request, Response } from 'express';
import { bodyRequest, bodyRequestByUpdate } from '../interfaces/bodyLogin';
import erroCustom from '../interfaces/error';
import { loginService } from '../services/Login';
import errExpected from '../interfaces/erroExpected';

export const login = async (req: Request, res: Response) => {
  try {
    const { password, username } = req.body as bodyRequest;
    const token = await loginService({ password, username });
    return res.status(200).json(token);
  } catch (error: errExpected | any) {
    console.log(error.message);
    return res.status(error.code).json({ message: error.message });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const response = await createUserService(req.body);
    return res.status(201).json(response);
  } catch (error: errExpected | any) {
    console.log(error.message);
    return res.status(error.code).json({ message: error.message });
  }
};

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { newPassword, newUsername, password, username } = req.body as bodyRequestByUpdate;
    const response = await updateUserService({ newPassword, newUsername, password, username });
    return res.status(200).json(response);
  } catch (error: errExpected | any) {
    console.log(error.message);
    next(error);
  }
};
