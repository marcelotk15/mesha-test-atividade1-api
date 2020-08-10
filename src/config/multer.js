const multer = require("multer");
const { resolve, extname } = require("path");
const crypto = require("crypto");

module.exports = {
  storage: multer.diskStorage({
    destination: resolve(__dirname, "..", "tmp", "uploads"),
    filename: async (req, file, cb) => {
      crypto.randomBytes(16, async (err, res) => {
        if (err) return cb(err);

        return await cb(
          null,
          `${res.toString("hex")}${extname(file.originalname)}`
        );
      });
    },
  }),
};
