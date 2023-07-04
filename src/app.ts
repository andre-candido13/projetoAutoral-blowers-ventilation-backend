import 'express-async-errors';
import cors from 'cors';
import express from 'express';
import { loadEnv } from './config/envs';
import { handleApplicationError } from './middleware';
import signUpRouter from './routes/signUp';



loadEnv();

const app = express();

app.use(cors());
app.use(express.json());
app.get('/health', (_req, res) => res.send('OK!'));
app.use('/signup', signUpRouter);
app.use(handleApplicationError);


  
  export default app;