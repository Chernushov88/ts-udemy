import { Router, Request, Response } from "express";

const router = Router()
router.get('/login', (req: Request, res: Response) => {
  res.render('login'); // шукає views/login.ejs
});

export { router }