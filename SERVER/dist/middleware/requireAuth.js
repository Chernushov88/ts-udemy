"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = requireAuth;
function requireAuth(req, res, next) {
    // if (!req.session?.logedIn) {
    if (req.session && req.session.logedIn) {
        return next();
    }
    return res.redirect('/login');
}
