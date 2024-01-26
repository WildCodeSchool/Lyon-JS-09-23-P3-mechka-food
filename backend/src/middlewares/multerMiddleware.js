const multer = require("multer");

// const MIME_TYPES = {
//   "images/jpg": "jpg",
//   "images/jpeg": "jpg",
//   "images/png": "png",
// };
// indique où les fichiers entrant vont être enregistrés
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../frontend/public/images");
  },
  // explique à multer quel nom de fichier utiliser
  filename: (req, file, callback) => {
    const name = file.originalname.split(".")[0];
    const extension = file.mimetype.split("/")[1];
    callback(null, `${name + Date.now()}.${extension}`);
  },
});

module.exports = multer({ storage }).single("recipeimage");
