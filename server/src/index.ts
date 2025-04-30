// server/src/index.ts
import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { errorHandler } from './errorHandler';

const app = express();
app.use(cors());
app.use(morgan('dev'));


const PORT = process.env.PORT || 5000;

app.get('/api', (req: Request, res: Response) => {
  res.json({ message: 'Hello from Express server with TypeScript!' });
});

app.get('/error', (req, res) => {
  throw new Error('Test error!');
});

app.use(errorHandler);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});