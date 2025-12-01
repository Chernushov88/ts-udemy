import { error } from "console";
import { Router, Request, Response } from "express";

interface RequestWithBody extends Request {
  body: {[key: string]: string | undefined}
}

const router = Router()
// GET /login
router.get('/login', (req: Request, res: Response) => {
  res.render('login', {error: null}); 
});

// POST /login
router.post('/login', (req: RequestWithBody, res: Response) => {
  const {email, password } = req.body

  const isValid = (
    email === 'test@gmail.com' &&
    password === 'Password'
  );
  
  if(isValid){
    req.session = { logedIn: true, email, success: `Welcome, ${email}!` }; 
    return res.redirect('/');
  } 
  // res.send('Invalide email or password')
  if(email || password){
    return  res.render('login', {
      error: 'Invalide email or password'
    })
  }  

  return res.render('login');
})

// Logout route
router.get('/logout', (req: Request, res: Response) => {
  req.session = null;
  res.redirect('/login');
});

export { router }