import express from 'express';
import routerLogin from './login';

const router = express.Router();

router.use('/user', routerLogin);


export default router;