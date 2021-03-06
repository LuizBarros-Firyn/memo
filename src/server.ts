import * as dotenv from 'dotenv';

import express from 'express';
import routes from './routes/index';

dotenv.config();

const app = express();

app.use(express.json());

app.use(routes);

// eslint-disable-next-line no-console
app.listen(3333, () => console.log('\nUp and Running ! ! !'));
