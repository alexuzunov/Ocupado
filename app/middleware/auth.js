const jwt = require('jsonwebtoken');

exports.auth = async function (req, res, next) {
    const authorizationHeader = req.header("Authorization");

    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
        return res.status(401).json({ success: false, message: "Invalid authorization header!" });
    }

    const token = authorizationHeader.replace("Bearer ", "");

    if (!token) {
        return res.status(401).json({ success: false, message: "Authorization token not found!" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;

        next();
    } catch (err) {
        console.error(err);
        return res.status(401).json({ success: false, message: "Invalid token!" });
    }
};
