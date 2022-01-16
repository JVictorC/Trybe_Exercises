
import Joi from '@hapi/joi';
import {bodyRequest, bodyRequestByUpdate} from '../interfaces/bodyLogin';
import { createUser, findUser, updateUserByName } from '../models/Login';
import { genToken } from './AuthService';

const verifiedBodyByUpdate = (bodyRequest: bodyRequestByUpdate) => {
  const { error } = Joi.object({
    username: Joi.string().min(5).required(),
    password: Joi.string().min(5).required(),
    newUsername: Joi.string().min(5).required(),
    newPassword: Joi.string().min(5).required(),
  }).validate(bodyRequest);

  return error;
};

const verifiedBody = (bodyRequest: bodyRequest) => {
  const { error } = Joi.object({
    username: Joi.string().min(5).required(),
    password: Joi.string().min(5).required(),
  }).validate(bodyRequest);

  return error;
};

export const createUserService = async (bodyRequest: bodyRequest) => {
  const hasError = verifiedBody(bodyRequest);
  if(hasError) throw {code: 400, message: hasError.message}

  const id = await createUser(bodyRequest);

  return {
    id,
    ...bodyRequest
  }
}

export const loginService = async (bodyRequest: bodyRequest) => {
  const hasError = verifiedBody(bodyRequest);

  if(hasError) throw {code: 400, message: hasError.message}

  const user = await findUser(bodyRequest);


  if(!user) throw { code: 401, message: 'Usuário não existe ou senha inválida' };

  const validations = [
    user.password !== bodyRequest.password,
    user.username !== bodyRequest. username
  ];

  if(validations.includes(true)) {
    throw { code: 401, message: 'Usuário não existe ou senha inválida' };
  }

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

export const updateUserService = async (bodyRequest: bodyRequestByUpdate) => {
  const hasError = verifiedBodyByUpdate(bodyRequest);

  if(hasError) throw {code: 400, message: hasError.message}

  const user = await findUser(bodyRequest);


  if(!user) throw { code: 401, message: 'Usuário não existe ou senha inválida' };
  
  const validations = [
    user.password !== bodyRequest.password,
    user.username !== bodyRequest. username
  ];

  if(validations.includes(true)) {
    throw { code: 401, message: 'Usuário não existe ou senha inválida' };
  }

  const response = await updateUserByName(bodyRequest);
  console.log(response);


  return {
    message: 'Success',
    ...bodyRequest
  }
}