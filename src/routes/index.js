const express = require("express");
const multer = require("multer");

const multerConfig = require("../config/multer");

const { successRes } = require("../utils/response");

const PatientController = require("../app/controllers/PatientController");
const AttendanceController = require("../app/controllers/AttendanceController");
const ProcedureController = require("../app/controllers/ProcedureController");

const upload = multer(multerConfig);

const router = express.Router();

router.get("/", (req, res) =>
  successRes(res, { message: "UHUL! The API is UP && RUNNING" })
);

router.get("/patients", upload.single("avatar"), PatientController.list);
router.post("/patients", upload.single("avatar"), PatientController.store);

router.post("/attendances", AttendanceController.store);
router.patch("/attendances", AttendanceController.finish);

router.post("/procedures", ProcedureController.store);

module.exports = router;
