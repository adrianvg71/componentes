const express = require("express");
const { getAdminUserPage, deleteUser, editUser, addUser } = require("../controllers/adminUserController");
const router = express.Router();

router.get("/", getAdminUserPage);

router.delete("/delete/:id", deleteUser)

router.put("/edit/:id", editUser)

router.post("/add", addUser)

module.exports = router;