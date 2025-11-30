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

  if(email && password && email === 'test@gmail.com' && password === 'password'){
    reg.session = { logedIn: true, email }; 
    return res.redirect('/');
  } 
  res.send('Invalide email or password')
})

// Logout route
router.get('/logout', (req: Request, res: Response) => {
  req.session = null;
  res.redirect('/login');
});

export { router }