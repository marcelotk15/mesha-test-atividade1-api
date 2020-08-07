const express = require("express");

const { successRes } = require("../utils/response");

const router = express.Router();

router.get("/", (req, res) =>
  successRes(res, { message: "UHUL! The API is UP && RUNNING" })
);

module.exports = router;
