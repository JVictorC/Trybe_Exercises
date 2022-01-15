import express from 'express';
import { login, createUser } from '../../controllers/Login';
const routerLogin = express.Router();

routerLogin.post('/create', createUser)
routerLogin.post('/login', login);

export default routerLogin;