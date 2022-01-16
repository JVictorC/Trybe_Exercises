import jwt, { SignOptions } from 'jsonwebtoken';

const PASSWORD_SERVER = 'PASSWORD_SAFE';

interface decodedToken {
  name: string;
  admin: boolean;
  iat: number;
  exp: number;
}

const configJwt: SignOptions = {
  expiresIn: 3600,
  algorithm: 'HS256',
};


export const genToken = (name: String, admin: boolean) => {
  return	jwt.sign({name, admin}, PASSWORD_SERVER, configJwt);
}

export const isTokenValid = (token: string, username: string) => {
  const decoded = jwt.verify(token, PASSWORD_SERVER) as decodedToken | any;
  console.log(`Token `,decoded );
  return decoded.name === username;
}