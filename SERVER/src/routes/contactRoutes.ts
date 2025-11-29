import { Router, Request, Response } from "express";

const router = Router()
router.get('/contact', (req: Request, res: Response) => {
  res.render('contact'); 
});

router.post('/contact', (reg: Request, res: Response) => {
  const {email, password } = reg.body

  res.send(email + ' ' + password)
})

export { router }