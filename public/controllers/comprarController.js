const { getCarritoByUserId } = require("../models/carritoModel");

async function getComprarPage(req,res) {
  const carrito = await getCarritoByUserId(req.session.userId);

  res.render('comprar', {carrito: carrito, user: req.session})
}

module.exports = {
  getComprarPage
}