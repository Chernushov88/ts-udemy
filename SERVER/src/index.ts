import express from 'express';
import path from 'path';

import { router as loginRouter } from './routes/loginRoutes';
import { homeRouter } from './routes/homeRoutes';

const app = express();
const PORT = 3001;

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(homeRouter);
app.use(loginRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});