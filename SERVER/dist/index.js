"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginRoutes_1 = require("./routes/loginRoutes");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = 3005;
// Вказуємо папку з шаблонами
app.set('views', path_1.default.join(__dirname, '../views'));
app.set('view engine', 'ejs');
// Статичні файли (CSS, картинки)
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(loginRoutes_1.router);
// Start server
app.listen(PORT, () => {
    console.log(`
    <div>
    <h1>
    🚀 Server running at http://localhost:${PORT}
    </h1>
    <div>`);
});
