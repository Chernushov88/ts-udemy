import { Router, Request, Response } from "express";

interface RequestWithBody extends Request {
  body: {[key: string]: string | undefined}
}

const router = Router()
// GET /login
router.get('/login', (req: Request, res: Response) => {
  res.render('login'); 
});

// POST /login
router.post('/login', (req: RequestWithBody, res: Response) => {
  const {email, password } = req.body

  if(email && password && email === 'test@gmail.com' && password === 'Password'){
    req.session = { logedIn: true, email }; 
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