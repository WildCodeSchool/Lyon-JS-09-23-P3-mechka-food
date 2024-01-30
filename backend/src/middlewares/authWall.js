const authWall = (req, res, next) => {
  if (req.cookies) {
    next();
  } else {
    res.status(401).send("Not Auth");
  }
};

module.exports = {
  authWall,
};
