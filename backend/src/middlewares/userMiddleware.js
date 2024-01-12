const userMiddleware = (req, res, next) => {
  const { username, firstname, lastname, email, password } = req.body;
  const errors = [];
  const emailRegex = /[a-z0-9._]+@[a-z0-9-]+.[a-z]{2,3}/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
  if (username === undefined) {
    errors.push({ field: "username", message: "Ce champ est requis." });
  }
  if (firstname === undefined) {
    errors.push({ field: "firstname", message: "Ce champ est requis." });
  } else if (firstname.length > 50) {
    errors.push({
      field: "firstname",
      message: "Le nombre maximum de caractères est de 50.",
    });
  }
  if (lastname === undefined) {
    errors.push({ field: "lastname", message: "Ce champ est requis." });
  }
  if (!emailRegex.test(email)) {
    errors.push({ field: "email", message: "Email invalide." });
  }
  if (!passwordRegex.test(password)) {
    errors.push({
      field: "password",
      message:
        "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
    });
  }
  if (errors.length) {
    res.status(422).json({ validationErrors: errors });
  } else {
    next();
  }
};
module.exports = userMiddleware;
