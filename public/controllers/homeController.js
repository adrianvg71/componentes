const { getCarritoByUserId } = require("../models/carritoModel");
const { getAllCategories } = require("../models/categoriasModel");
const { getAllProductos } = require("../models/productosModel");

async function getMainPage(req, res) {
  const categorias = await getAllCategories();
  let carrito = [];
  if(req.session.userId) {
    carrito = await getCarritoByUserId(req.session.userId)
  } 


  res.render('index', { user: req.session, categorias: categorias, carrito: carrito, isHomePage: true});
}

module.exports = {
  getMainPage,
}