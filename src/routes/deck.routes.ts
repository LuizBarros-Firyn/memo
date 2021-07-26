import { Router } from 'express';

import cardRouter from './card.routes';

import DeckController from '../controllers/DeckController';

const deckRouter = Router();

deckRouter.use('/:deckId/cards', cardRouter);

deckRouter.get('/', DeckController.find);

deckRouter.post('/', DeckController.store);

export default deckRouter;
