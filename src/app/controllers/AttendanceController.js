const Patient = require("../models/Patient");
const Attendance = require("../models/Attendance");
const { errorRes, successRes } = require("../../utils/response");

exports.store = async (req, res) => {
  const { patient_id } = req.body;

  const patient = await Patient.findByPk(patient_id);

  if (!patient) return errorRes(res, "Paciente não foi encontrado.", 409);

  const attendance = await Attendance.create(
    {
      patient_id,
      started_at: Date.now(),
    },
    {
      include: [Patient],
    }
  );

  return successRes(res, { attendance });
};

exports.finish = async (req, res) => {
  const { id } = req.body;

  const attendance = await Attendance.findByPk(id);

  if (!attendance) return errorRes(res, "Atendimento não foi encontrado.", 409);

  await attendance.update({
    finished_at: Date.now(),
  });

  return successRes(res, { attendance });
};
