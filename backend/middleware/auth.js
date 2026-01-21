import JWT from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    try {
        const token = req.headers.token;

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Not authorized, login again",
            });
        }

        const decoded = JWT.verify(token, process.env.JWT_SECRET);

        req.body.userId = decoded.id;

        next();
    } catch (err) {
        console.error("Auth middleware error:", err.message);
        return res.status(401).json({
            success: false,
            message: "Not authorized, login again",
        });
    }
};
