import { Router, Request, Response } from "express";

const homeRouter = Router();

homeRouter.get('/', (req: Request, res: Response) => {
  res.render('home');  // views/home.ejs
});

export { homeRouter };