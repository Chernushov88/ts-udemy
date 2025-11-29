import { Router, Request, Response } from "express";

interface RequestWithBody extends Request {
  body: {[key: string]: string | undefined}
}


const router = Router()
router.get('/login', (req: Request, res: Response) => {
  res.render('login'); 
});

router.post('/login', (reg: RequestWithBody, res: Response) => {
  const {email, password } = reg.body
  if(email && password){
    res.send(email.toUpperCase() + ' ' + password.toUpperCase())
  } else {
    res.send('You must provide an email')
  }
  
})

export { router }