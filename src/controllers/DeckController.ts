import { Request, Response } from 'express';
import { Deck } from '../models';

const DeckController = {
  find: async (req: Request, res: Response): Promise<Response> => {
    const { JwtUserId } = req.headers;

    const decks = await Deck.findMany({
      where: {
        userId: +JwtUserId!
      }
    });

    return res.json(decks);
  },

  store: async (req: Request, res: Response): Promise<Response> => {
    const { JwtUserId } = req.headers;

    const { name, category } = req.body;

    const deck = await Deck.create({
      data: {
        name,
        category,
        userId: +JwtUserId!
      }
    });

    return res.json(deck);
  }
};

export default DeckController;
