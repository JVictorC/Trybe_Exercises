import express from 'express';
import { login, createUser, updateUser } from '../../controllers/Login';
import authToken from '../../middlewares/authToken';
const routerUser = express.Router();

routerUser.post('/create', createUser);
routerUser.put('/update-user', authToken,updateUser)
routerUser.post('/login', login);

export default routerUser;