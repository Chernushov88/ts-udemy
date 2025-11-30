import { Request, Response, NextFunction } from 'express';

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (!req.session?.logedIn) {
    return res.redirect('/login');
  }

  next();
}
