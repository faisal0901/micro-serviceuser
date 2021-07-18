const express = require("express");
const router = express.Router();
const handleToken = require("./Handler/refreshToken");
/* GET users listing. */
router.post("/", handleToken.create);
router.get("/", handleToken.getToken);
module.exports = router;
