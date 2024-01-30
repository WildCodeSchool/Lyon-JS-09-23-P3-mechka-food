// const jwt = require("jsonwebtoken");

const authWall = (req, res, next) => {
  if (req.cookies.access_token) {
    next();
  } else {
    res.status(401).send("Not Auth");
  }
};

module.exports = {
  authWall,
};
