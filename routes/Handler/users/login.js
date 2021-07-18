const bcrypt = require("bcrypt");
const validator = require("fastest-validator");
const v = new validator();
const { User } = require("../../../models");
module.exports = async (req, res) => {
  const schema = {
    email: "email|empty:false",
    password: "string|min:6",
  };
  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.json({ status: "error", massage: validate }).status(400);
  }
  const user = await User.findOne({
    where: { email: req.body.email },
  });
  if (!user) {
    return res.json({ status: "error", massage: "email no found" }).status(404);
  }
  const isValidPassword = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (!isValidPassword) {
    return res.json({ status: "error", massage: "password wrong" });
  }
  return res.json({
    status: "success",
    data: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
      profesion: user.profesion,
    },
  });
};
