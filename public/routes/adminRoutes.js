const express = require("express");
const { mostrarPaginaAdmin } = require("../controllers/adminControllerController");
const adminUsersRoutes = require("./adminUsersRoutes");
const adminCategoriesRoutes = require("./adminCategoriesRoutes");
const adminProductsRoutes = require("./adminProductsRoutes");
const adminCarritoRoutes = require("./adminCarritoRoutes")
const router = express.Router();

router.get("/", mostrarPaginaAdmin);

router.use("/usuarios", adminUsersRoutes)

router.use("/categorias", adminCategoriesRoutes)

router.use("/productos", adminProductsRoutes)

router.use("/carrito", adminCarritoRoutes)

module.exports = router;