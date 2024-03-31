const express = require("express");
const { getAdminCatPage, deleteCat, editCat, addCat } = require("../controllers/adminCategoriesController");
const router = express.Router();

router.get("/", getAdminCatPage);

router.delete("/delete/:id", deleteCat)

router.put("/edit/:id", editCat)

router.post("/add", addCat)

module.exports = router;