const express = require("express");
const { getAllUsersController, createUserController } = require("../controllers/userController");
const router = express.Router();

router.get("/", getAllUsersController);

router.post("/add", createUserController)

module.exports = router;
