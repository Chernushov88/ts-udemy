"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
// GET /login
router.get('/login', (req, res) => {
    res.render('login');
});
// POST /login
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password && email === 'test@gmail.com' && password === 'Password') {
        req.session = { logedIn: true, email };
        return res.redirect('/');
    }
    res.send('Invalide email or password');
});
// Logout route
router.get('/logout', (req, res) => {
    req.session = null;
    res.redirect('/login');
});
