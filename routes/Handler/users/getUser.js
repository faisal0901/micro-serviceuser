const { User } = require("../../../models");
module.exports = async (req, res) => {
  const id = req.params.id;
  const user = await User.findByPk(id, {
    attributes: ["id", "name", "email", "role", "profesion", "avatar"],
  });
  if (!user) {
    return res.status(404).json({ status: "error", massage: "user not found" });
  }
  return res.json({
    status: "success",
    data: user,
  });
};
