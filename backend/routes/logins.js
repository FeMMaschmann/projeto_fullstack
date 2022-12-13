const express = require("express");
const router = express.Router();

const controller = require("../controller/logins");

router.post("/", controller.getByEmailPass);

module.exports = router;
