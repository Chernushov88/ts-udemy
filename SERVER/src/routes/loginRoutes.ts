import { Router, Request, Response } from "express";

const router = Router()
router.get('/login', (req: Request, res: Response) => {
  res.render('login'); // шукає views/login.ejs
});

router.post('/login', (reg: Request, res: Response) => {
  const {email, password } = reg.body

  res.send(email + ' ' + password)
})

export { router }