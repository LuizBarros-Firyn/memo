import { Router } from 'express';

import CardController from '../controllers/CardController';

const cardRouter = Router({ mergeParams: true });

cardRouter.get('/', CardController.find);

cardRouter.post('/', CardController.store);

export default cardRouter;
