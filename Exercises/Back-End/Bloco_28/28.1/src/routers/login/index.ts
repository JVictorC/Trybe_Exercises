import express from 'express';
import { login } from '../../controllers/Login';
const routerLogin = express.Router();

routerLogin.post('/', login);

export default routerLogin;