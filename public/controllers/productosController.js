const productosModel = require("../models/productosModel");

async function getAllProductsController(req, res) {
    try {
        const productos = await productosModel.getAllProductos();
        res.json(productos);
    } catch(error) {
        res.status(500).json({ error: error.message })
    }
}

async function getProductosByCategoriaController(req,res) {
  try {
    const categoria = req.params.categoria;
    const productos = await productosModel.getProductosByCategoria(categoria);
    res.json(productos)
  } catch(error) {
    res.status(500).json({error: error.message})
  }
}

async function deleteProductoController(req, res) {
  try {
    const id = req.params.id;
    await productosModel.deleteProdModel(id);
    res.sendStatus(200)
  } catch(error) {
    res.status(500).json({error: error.message})
  }
}

async function getProductPage(req, res) {
  try {
    const producto = await productosModel.getProductById(req.params.id);
    res.render('producto', {producto: producto, user: req.session})
  } catch(error) {
    res.status(500).json(error)
  }
}

async function searchProductController(req, res) {
  try {
    const productos = await productosModel.searchByName(req.params.query);
    res.status(200).json(productos);
  } catch(error) {
    res.status(500).json(error)
  }
}

module.exports = {
  getAllProductsController,
  getProductosByCategoriaController,
  deleteProductoController,
  getProductPage,
  searchProductController
}