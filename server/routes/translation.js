const translationController = require("../controllers/translationController");

const express = require("express");
const router = express.Router();

router.post("/", translationController.translate);

module.exports = router;
