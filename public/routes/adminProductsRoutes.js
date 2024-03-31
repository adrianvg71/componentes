const express = require("express");
const { getAdminProductsPage, deleteProd, editProd, addProd } = require("../controllers/adminProductsController");
const router = express.Router();

router.get("/", getAdminProductsPage);

router.delete("/delete/:id", deleteProd)

router.put("/edit/:id", editProd)

router.post("/add", addProd)

module.exports = router;