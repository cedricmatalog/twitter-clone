import { Request, Response, NextFunction } from 'express';

export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
) {
  // Type guard for Error
  if (err instanceof Error) {
    console.error(err.stack);
    res.status(500).json({ error: err.message });
  } else {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
