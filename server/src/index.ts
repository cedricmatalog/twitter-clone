// server/src/index.ts
import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api', (req: Request, res: Response) => {
  res.json({ message: 'Hello from Express server with TypeScript!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});