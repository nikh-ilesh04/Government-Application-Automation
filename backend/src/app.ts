import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from './routes';
import { env } from './config/env';
import { errorMiddleware } from './middleware/error.middleware';
import { simpleRateLimit } from './middleware/rateLimit.middleware';

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(simpleRateLimit);

app.get('/health', (_, res) => res.json({ ok: true }));
app.use('/api', router);
app.use(errorMiddleware);

app.listen(env.port, () => {
  console.log(`Backend running on http://localhost:${env.port}`);
});
