import jwt from 'jsonwebtoken';
import JwtSecret from '../config/JwtSecret';

import { JwtClaims } from '../interfaces/UtilityInterfaces';

const JwtSign = (claims: JwtClaims): string => {
  const authorizationKey = jwt.sign({ claims }, JwtSecret || 'test', {
    expiresIn: 100000
  });

  return authorizationKey;
};

export default JwtSign;
