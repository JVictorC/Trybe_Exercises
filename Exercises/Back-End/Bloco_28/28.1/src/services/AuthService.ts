import jwt, { SignOptions } from 'jsonwebtoken';

const PASSWORD_SERVER = 'PASSWORD_SAFE';

const configJwt: SignOptions = {
  expiresIn: 3600,
  algorithm: 'HS256',
};


export const genToken = (name: String, admin: boolean) => {
  return	jwt.sign({name, admin}, PASSWORD_SERVER, configJwt);
}

export const verifyToke = (token: string) => {
  const teste = jwt.verify(token, PASSWORD_SERVER);
  console.log(teste);
}