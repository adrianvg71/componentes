const express = require("express");
const { getAllProductsController, getProductosByCategoriaController, deleteProductoController, getProductPage, searchProductController } = require("../controllers/productosController");
const router = express.Router();

router.get("/", getAllProductsController)

router.get("/:categoria", getProductosByCategoriaController)

router.delete("/delete/:id", deleteProductoController)

router.get("/producto/:id", getProductPage)

router.get("/producto/search/:query", searchProductController)

module.exports = router