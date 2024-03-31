const { getAllCarritoModel, deleteCarritoModel, updateCarritoModel, createCarritoModel } = require("../models/carritoModel");
const { getAllProductos } = require("../models/productosModel");
const { getAllUsersModel } = require("../models/userModel");

async function getAdminCarritoPage(req, res) {
  const carrito = await getAllCarritoModel();
  const users = await getAllUsersModel();
  const productos = await getAllProductos();

  res.render("adminCarrito", {carrito: carrito, user: req.session, productos: productos, usuarios: users})
}

async function deleteCarrito(req,res) {
  try {
    await deleteCarritoModel(req.params.id)
    res.sendStatus(200)
  } catch(error) {
    res.status(500).json(error)
  }
}
 
async function editCarrito(req,res) {
  console.log(req.body)
  try {
    await updateCarritoModel(req.params.id, req.body)
    res.sendStatus(200)
  } catch(error) {
    res.status(500).json(error)
  }
}

async function addCarrito(req, res) {
  try {
    await createCarritoModel(req.body)
    res.sendStatus(200)
  } catch(error) {
    res.status(500).json(error)
  }
}

module.exports = {
  getAdminCarritoPage,
  deleteCarrito,
  editCarrito,
  addCarrito
}