const { User } = require("../../../models");
const bcrypt = require("bcrypt");
const validator = require("fastest-validator");
const v = new validator();
module.exports = async (req, res) => {
  const schema = {
    name: "string|empty:false",
    email: "email|empty:false",
    password: "string|empty:false|min:6",
    profesion: "string|optional",
  };
  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.status(400).json({ status: "error", massage: validate });
  }
  const user = await User.findOne({ where: { email: req.body.email } });
  if (user) {
    return res
      .status(409)
      .json({ status: "error", massage: "email already existed" });
  }
  const password = await bcrypt.hash(req.body.password, 10);
  const data = {
    password,
    name: req.body.name,
    email: req.body.email,
    profesion: req.body.profesion,
    role: "student",
  };
  const createUser = await User.create(data);
  return res.json({
    status: "succes",
    data: {
      id: createUser.id,
    },
  });
};
