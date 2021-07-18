const express = require("express");
const router = express.Router();
const handleUser = require("./Handler/users");
/* GET users listing. */
router.post("/register", handleUser.register);
router.post("/login", handleUser.login);
router.put("/:id", handleUser.update);
router.get("/:id", handleUser.getUser);
router.get("/", handleUser.getUsers);
router.post("/logout", handleUser.logout);
module.exports = router;
