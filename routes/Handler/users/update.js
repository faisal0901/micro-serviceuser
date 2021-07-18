const { User } = require("../../../models");
const bcrypt = require("bcrypt");
const validator = require("fastest-validator");
const v = new validator();
module.exports = async (req, res) => {
  try {
    const schema = {
      name: "string|empty:false",
      email: "email|empty:false",
      password: "string|min:6",
      profesion: "string|optional",
      avatar: "string|optional",
    };
    const validate = v.validate(req.body, schema);
    if (validate.length) {
      return res.json({ status: "error", massage: validate }).status(400);
    }
    const id = req.params.id;
    const user = await User.findByPk(id);
    if (!user) {
      return res
        .status(404)
        .json({ status: "error", massage: "user not found" });
    }
    const email = req.body.email;
    if (email) {
      const checkEmail = await User.findOne({
        where: { email: email },
      });

      if (checkEmail && email !== user.email) {
        return res
          .status(409)
          .json({ status: "error", massage: "email already exist" });
      }
    }
    const password = await bcrypt.hash(req.body.password, 10);
    const { name, profesion, avatar } = req.body;

    await user.update({
      email,
      password,
      name,
      profesion,
      avatar,
    });

    return res.json({
      status: "success",
      data: {
        id: user.id,
        name,
        email,
        profesion,
        avatar,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
