const express = require("express");
const { getAdminCarritoPage, deleteCarrito, editCarrito, addCarrito } = require("../controllers/adminCarritoController");
const router = express.Router();

router.get("/", getAdminCarritoPage);

router.delete("/delete/:id", deleteCarrito)

router.put("/edit/:id", editCarrito)

router.post("/add", addCarrito)

module.exports = router;