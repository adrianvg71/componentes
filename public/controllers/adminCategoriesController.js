const { getAllCategories, updateCatModel, createCatModel, deleteCatModel  } = require("../models/categoriasModel");

async function getAdminCatPage(req, res){
  const categories = await getAllCategories();

  res.render('adminCategories', {categorias: categories, user: req.session})
}

async function deleteCat(req,res) {
  try {
    await deleteCatModel(req.params.id)
    res.sendStatus(200)
  } catch(error) {
    res.status(500).json(error)
  }
}
 
async function editCat(req,res) {
  try {
    await updateCatModel(req.params.id, req.body)
    res.sendStatus(200)
  } catch(error) {
    res.status(500).json(error)
  }
}

async function addCat(req, res) {
  try {
    await createCatModel(req.body)
    res.sendStatus(200)
  } catch(error) {
    res.status(500).json(error)
  }
}

module.exports = {
  getAdminCatPage,
  deleteCat,
  editCat,
  addCat
}