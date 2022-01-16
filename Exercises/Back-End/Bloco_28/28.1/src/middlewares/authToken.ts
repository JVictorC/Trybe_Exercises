import { NextFunction, Request, Response } from 'express';
import { isTokenValid } from '../services/AuthService';

const authToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization: Authorization } = req.headers;
    const { username } = req.body;
    if (!username) throw { code: 401, message: 'username is required' };
    if (!Authorization) throw { code: 401, message: 'Token Not Found' };
    if (!isTokenValid(Authorization, username)) throw { code: 401, message: 'token not valid' };
    
    next();
  } catch (error: any) {
    console.log(error.message);
    next(error);
  }
};

export default authToken;
