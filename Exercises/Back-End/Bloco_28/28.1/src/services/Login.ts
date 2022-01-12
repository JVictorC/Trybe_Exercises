
import Joi from '@hapi/joi';
import bodyRequest from '../interfaces/bodyLogin';
import { genToken } from './AuthService';

const verifiedBody = (bodyRequest: bodyRequest) => {
  const { error } = Joi.object({
    username: Joi.string().min(5).required(),
    password: Joi.string().min(5).required(),
  }).validate(bodyRequest);

  return error;
};

export const loginService = (bodyRequest: bodyRequest): {token: String} => {
  const hasError = verifiedBody(bodyRequest);
  if(hasError) throw {code: 400, message: hasError.message}

  if(bodyRequest.password ===  's3nh4S3gur4???' && bodyRequest.username === 'admin') {
    const token = genToken(bodyRequest.username, true);
    return {
      token
    }
  }
  const token = genToken(bodyRequest.username, false);
  return {
    token
  }
};
