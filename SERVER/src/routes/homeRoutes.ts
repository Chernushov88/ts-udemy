import { Router, Request, Response } from "express";
import { requireAuth } from "../middleware/requireAuth";


const homeRouter = Router();

homeRouter.get('/', requireAuth, (req: Request, res: Response) => {
  res.render('home',{
    email: req.session?.email
  }); 
});

export { homeRouter };