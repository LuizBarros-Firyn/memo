import { Request, Response } from 'express';

import { User } from '../models';

import { Sha3Factory } from '../services/UtilityServices';

const UserController = {
  find: async (req: Request, res: Response): Promise<Response> => {
    const users = await User.findMany();

    return res.json(users);
  },

  store: async (req: Request, res: Response): Promise<Response> => {
    const { email, name, password } = req.body;

    const user = await User.create({
      data: {
        email,
        name,
        password: Sha3Factory(password)
      }
    });

    return res.json(user);
  }
};

export default UserController;
