    const jwt = require('jsonwebtoken');
    module.exports = function (req, res, next) {
    const token = req.headers.authorization
    
    if (!token) return res.status(401).json({ error: 'Access denied' });
    try {
        const decoded = jwt.verify(token, 'your-secret-key');
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(401).json({ error,message: 'Invalid token' });
    }
 };