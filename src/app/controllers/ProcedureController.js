const Attendance = require("../models/Attendance");
const Procedure = require("../models/Procedure");
const { successRes, errorRes } = require("../../utils/response");

exports.store = async (req, res) => {
  const { name, price, duration, attendance_id } = req.body;

  console.log(name, price, duration, attendance_id);

  await Procedure.findOrCreate({
    where: {
      name,
      attendance_id,
    },
    defaults: {
      name,
      price,
      duration,
      attendance_id,
    },
  })
    .then((procedure, created) => {
      return successRes(res, { procedure });
    })
    .catch((err) => {
      return errorRes(res, "Algo deu errado...", 400);
    });
};
