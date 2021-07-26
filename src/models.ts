import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error']
});

export const { user: User, card: Card, deck: Deck } = prisma;
