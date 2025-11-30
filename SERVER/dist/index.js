"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const loginRoutes_1 = require("./routes/loginRoutes");
const homeRoutes_1 = require("./routes/homeRoutes");
const contactRoutes_1 = require("./routes/contactRoutes");
const cookie_session_1 = __importDefault(require("cookie-session"));
const app = (0, express_1.default)();
const PORT = 3001;
app.set('views', path_1.default.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_session_1.default)({
    name: 'session',
    keys: ['your_secret_key_1'],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
app.use((req, res, next) => {
    res.locals.email = req.session?.email || null;
    next();
});
// Routes
app.use(homeRoutes_1.homeRouter);
app.use(loginRoutes_1.router);
app.use(contactRoutes_1.router);
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
