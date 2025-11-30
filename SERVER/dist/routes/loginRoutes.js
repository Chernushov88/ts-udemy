"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/login', (req, res) => {
    res.render('login');
});
router.post('/login', (reg, res) => {
    const { email, password } = reg.body;
    if (email && password && email === 'test@gmail.com' && password === 'password') {
        reg.session = { logedIn: true, email };
        return res.redirect('/');
    }
    res.send('Invalide email or password');
});
// Logout route
router.get('/logout', (req, res) => {
    req.session = null;
    res.redirect('/login');
});
