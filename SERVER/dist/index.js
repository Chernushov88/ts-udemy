"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginRoutes_1 = require("./routes/loginRoutes");
const app = (0, express_1.default)();
const PORT = 3005;
// Middleware
/*app.use(bodyParser.json());

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express + TypeScript!');
});*/
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
