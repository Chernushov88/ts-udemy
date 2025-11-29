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
    if (email && password) {
        res.send(email.toUpperCase() + ' ' + password.toUpperCase());
    }
    else {
        res.send('You must provide an email');
    }
});
