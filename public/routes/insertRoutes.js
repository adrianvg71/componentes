const express = require("express");
const router = express.Router();

const insertController = require("../controllers/insertController")

router.get("/", insertController.crearTablas)

module.exports = router;