import { Request, Response, NextFunction } from 'express';

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  // if (!req.session?.logedIn) {
  if (req.session && req.session.logedIn) {
    return next();    
  }

  return res.redirect('/login');
}