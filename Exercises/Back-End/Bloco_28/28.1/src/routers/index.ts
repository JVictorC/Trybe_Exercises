import express from 'express';
import routerUser from './user';

const router = express.Router();

router.use('/user', routerUser);


export default router;