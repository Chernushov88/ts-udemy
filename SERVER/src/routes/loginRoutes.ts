import { Router, Request, Response } from "express";

const router = Router()


router.get('/login', (req: Request, res: Response) => {
  res.send('Hello!');
});

export { router }