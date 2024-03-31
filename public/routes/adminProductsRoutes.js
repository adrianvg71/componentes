const express = require("express");
const { getAdminProductsPage, deleteProd, editProd, addProd } = require("../controllers/adminProductsController");
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.get("/", getAdminProductsPage);

router.delete("/delete/:id", deleteProd)

router.put("/edit/:id", editProd)

router.post("/add", upload.single('img'), addProd)

module.exports = router;