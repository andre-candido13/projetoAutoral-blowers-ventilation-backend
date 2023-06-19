import 'express-async-errors';
import cors from 'cors';
import express, { json } from 'express';

import { loadEnv } from './configs/envs';
import handleApplicationErrors from './middlewares/error.middleware';
import routes from './routes';

loadEnv();

const app = express();

app.use(cors());
app.use(json());
app.get('/health', (_req, res) => res.send('OK!'));
app.use(routes);
app.use(handleApplicationErrors);

export default app;
