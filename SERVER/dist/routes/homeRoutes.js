"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeRouter = void 0;
const express_1 = require("express");
const requireAuth_1 = require("../middleware/requireAuth");
const homeRouter = (0, express_1.Router)();
exports.homeRouter = homeRouter;
homeRouter.get('/', requireAuth_1.requireAuth, (req, res) => {
    res.render('home', {
        email: req.session?.email
    });
});
