import express from 'express';
import { router } from './routes/loginRoutes';
import path from 'path';

const app = express();
const PORT = 3005;
// Вказуємо папку з шаблонами
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
// Статичні файли (CSS, картинки)
app.use(express.static(path.join(__dirname, '../public')));
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