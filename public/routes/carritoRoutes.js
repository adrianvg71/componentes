const express = require("express");
const { getCarritoByUserIdController, insertarCarritoController, deleteCarritoController } = require("../controllers/carritoController");
const router = express.Router();

router.get('/', getCarritoByUserIdController)

router.post('/insertar', insertarCarritoController)

router.delete('/delete/:id', deleteCarritoController)


module.exports = router;