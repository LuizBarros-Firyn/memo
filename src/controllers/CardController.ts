import { Request, Response } from 'express';
import { Card, Deck } from '../models';

const CardController = {
  find: async (req: Request, res: Response): Promise<Response> => {
    const { JwtUserId } = req.headers;
    const { deckId } = req.params;

    const cards = await Card.findMany({
      where: {
        deckId: +deckId,
        Deck: {
          userId: +JwtUserId!
        }
      }
    });

    return res.json(cards);
  },

  store: async (req: Request, res: Response): Promise<Response> => {
    const { JwtUserId } = req.headers;
    const { deckId } = req.params;
    const { front, back } = req.body;

    const deck = await Deck.findFirst({
      where: {
        id: +deckId,
        userId: +JwtUserId!
      }
    });

    if (!deck)
      return res
        .status(401)
        .send({ message: 'Sem permissão para adicionar cartas a esse deck' });

    const card = await Card.create({
      data: {
        front,
        back,
        deckId: deck.id
      }
    });

    return res.json(card);
  }
};

export default CardController;
