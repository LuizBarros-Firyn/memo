import { Request, Response } from 'express';

import { User } from '../models';

import { Sha3Factory } from '../services/UtilityServices';
import JwtSignService from '../services/JwtSignService';

const SessionController = {
  create: async (req: Request, res: Response): Promise<Response> => {
    const { email, password } = req.body;

    const user = await User.findFirst({
      where: {
        email,
        password: Sha3Factory(password)
      }
    });

    if (!user)
      return res.status(404).send({ message: 'Usuário não encontrado' });

    const authorizationKey = JwtSignService({
      id: user.id,
      email: user.email,
      name: user.name
    });

    return res.json({ authorizationKey });
  }
};

export default SessionController;
