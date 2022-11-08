const express = require("express");
const router = express.Router();

const controller = require("../controller/books");

router.get("/", controller.get);
router.post("/", controller.insert);
router.get("/:id", controller.getById);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

module.exports = router;
