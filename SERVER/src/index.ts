import express from 'express';
import path from 'path';

import { router as loginRouter } from './routes/loginRoutes';
import { homeRouter } from './routes/homeRoutes';
import { router as contactRoutes } from './routes/contactRoutes';
import  cookieSession  from 'cookie-session';

const app = express();
const PORT = 3001;

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));

app.use(cookieSession({
  name: 'session',
  keys: ['your_secret_key_1'], 
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

app.use((req, res, next) => {
  res.locals.email = req.session?.email || null;
  next();
});

// Routes
app.use(homeRouter);
app.use(loginRouter);
app.use(contactRoutes);


app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});