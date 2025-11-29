"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/contact', (req, res) => {
    res.render('contact');
});
router.post('/contact', (reg, res) => {
    const { email, password } = reg.body;
    res.send(email + ' ' + password);
});
