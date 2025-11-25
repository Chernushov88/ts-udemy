import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { router } from './routes/loginRoutes';

const app = express();
const PORT = 3005;

// Middleware
/*app.use(bodyParser.json());

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express + TypeScript!');
});*/

app.use(router)

// Start server
app.listen(PORT, () => {
  console.log(`
    <div>
    <h1>
    🚀 Server running at http://localhost:${PORT}
    </h1>
    <div>`);
});