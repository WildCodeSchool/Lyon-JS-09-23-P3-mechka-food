const jwt = require("jsonwebtoken");

const adminWall = (req, res, next) => {
  try {
    const token = req.cookies.access_token;

    if (!token) {
      return res.sendStatus(403);
    }
    req.auth = jwt.verify(token, process.env.APP_SECRET);

    if (req.auth.isAdmin === 1) {
      return next();
    }

    return res.status(403).send("Not admin");
  } catch (err) {
    return res.sendStatus(401).send("il y eu une erreur");
  }
};

module.exports = {
  adminWall,
};
