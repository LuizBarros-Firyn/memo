import { Router } from 'express';

import JwtAuth from '../services/JwtAuth';

import deckRouter from './deck.routes';

import UserController from '../controllers/UserController';

const userRouter = Router();

userRouter.use(JwtAuth);

userRouter.use('/decks', deckRouter);

userRouter.get('/', UserController.find);

userRouter.post('/', UserController.store);

export default userRouter;
