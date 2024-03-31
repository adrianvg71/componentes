const { getCarritoByUserId, insertarCarritoModel, deleteCarritoModel } = require("../models/carritoModel");

async function getCarritoByUserIdController(req,res) {
  try {
    const carrito = await getCarritoByUserId(req.session.userId);
    res.status(200).json(carrito)
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

async function insertarCarritoController(req, res) {
  try {
    await insertarCarritoModel(req.body, req.session.userId)
    res.sendStatus(200)
  } catch(error) {
    res.status(500).json(error)
  }
}

async function deleteCarritoController(req, res) {
  try {
    await deleteCarritoModel(req.params.id)
    res.sendStatus(200)
  } catch(error) {
    res.status(500).json(error)
  }
}

module.exports = {
  getCarritoByUserIdController,
  insertarCarritoController,
  deleteCarritoController
}