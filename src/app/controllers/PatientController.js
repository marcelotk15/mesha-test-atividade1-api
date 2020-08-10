const fs = require("fs");
const { resolve } = require("path");

const Patient = require("../models/Patient");
const Avatar = require("../models/Avatar");
const { errorRes, successRes } = require("../../utils/response");

exports.store = async (req, res) => {
  const { name, birthday, email, phone, avatar_id } = req.body;

  const { originalname, filename } = req.file;

  const alreadyRegistered = await Patient.findOne({ where: { email } });

  if (alreadyRegistered) {
    await fs.unlinkSync(
      resolve(__dirname, "..", "..", "tmp", "uploads", filename)
    );

    return errorRes(res, "Paciente já cadastrado com esse email.", 409);
  }

  const avatar = await Avatar.create({
    name: originalname,
    path: filename,
  });

  const patient = await Patient.create(
    {
      name,
      birthday,
      phone,
      email,
      avatar_id: avatar.id,
    },
    {
      include: [Avatar],
    }
  );

  return successRes(res, { patient });
};
