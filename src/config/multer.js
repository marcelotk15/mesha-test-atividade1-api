const multer = require("multer");
const { resolve, extname } = require("path");
const crypt = require("crypto");

module.exports = {
  storage: multer.diskStorage({
    destination: resolve(__dirname, "..", "tmp", "uploads"),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);

        return cb(null, `${res.toString("hex")}${extname(file.originalname)}`);
      });
    },
  }),
};
