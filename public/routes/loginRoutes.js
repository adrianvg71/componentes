const express = require("express");
const { getLoginPage, logUser } = require("../controllers/loginController");
const router = express.Router();

router.get("/", getLoginPage)

router.post("/", logUser)

module.exports = router;