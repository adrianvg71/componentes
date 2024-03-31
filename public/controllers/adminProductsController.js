const { getAllCategories } = require("../models/categoriasModel");
const { getAllProductos, deleteProdModel, createProdModel, updateProdModel } = require("../models/productosModel");
require('dotenv').config()


async function getAdminProductsPage(req, res){
  const products = await getAllProductos()
  const categorias = await getAllCategories();

  res.render('adminProducts', {productos: products, categorias: categorias, user: req.session, imgbb_key: process.env.IMGBB_KEY})
}

async function deleteProd(req,res) {
  try {
    await deleteProdModel(req.params.id)
    res.sendStatus(200)
  } catch(error) {
    res.status(500).json(error)
  }
}
 
async function editProd(req,res) {
  console.log(req.body)
  try {
    await updateProdModel(req.params.id, req.body)
    res.sendStatus(200)
  } catch(error) {
    res.status(500).json(error)
  }
}

async function addProd(req, res) {
  try {
    await createProdModel(req.body)
    res.sendStatus(200)
  } catch(error) {
    res.status(500).json(error)
  }
}

module.exports = {
  getAdminProductsPage,
  deleteProd,
  editProd,
  addProd
}