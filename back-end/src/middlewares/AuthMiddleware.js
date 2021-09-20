const jwt = require('jsonwebtoken');

class AuthMiddleware {
    async auth(req, res, next) {
        const reqToken = req.headers.authorization;

        if (!reqToken) {
            res.status(401);
            res.json({error: "No token provided."});
            return;
        }

        const token = reqToken.split(" ")[1];

        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                console.log(err.message)
                if (err.message == 'invalid signature' || err.message == 'invalid token') {
                    res.status(401);
                    res.json({error: "Invalid token."});
                    return;
                } 
                if (err.message == 'jwt expired') {
                    res.status(401);
                    res.json({error: "Expired token."});
                    return;
                }
                res.status(401);
                res.json({ error: 'Authentication failed.' })
                return;
            }
            req.authUserId = 2;
            next();
        });
    }
}

module.exports = new AuthMiddleware();
