const obtenerConexion = require("../config/db");

let conexion;

(async function miConexion() {
    conexion = await obtenerConexion();
})()

async function getAllCarritoModel() {
  try {
    const query = `
    SELECT * FROM carrito
    `;
    const [rows] = await conexion.query(query);
    return rows;
  } catch(error) {
    console.log("Error al buscar el carrito " + error);
  }
}

async function getCarritoByUserId(usuario) {
  try {
    const query = `
    SELECT c.id AS id_carrito, p.* FROM carrito c JOIN productos p ON c.producto = p.idproducto  WHERE c.usuario = ?
    `;
    const [rows] = await conexion.query(query, [usuario]);
    return rows;
  } catch(error) {
    console.log("Error al buscar el carrito del usuario " + error);
  }
}

async function insertarCarritoModel(producto, usuarioId) { 
  try {
    let { nombreProducto } = producto;
    const [rows] = await conexion.query("SELECT * FROM productos WHERE nombre = ?", [nombreProducto])
    let idproducto = rows[0].idproducto;

    await conexion.query("INSERT INTO carrito (producto, usuario) VALUES (?,?)", [idproducto, usuarioId]);
  } catch (error) {
    console.log("Error al insertar en carrito " + error);
  }
}

async function deleteCarritoModel(carritoId) {
  try {

    await conexion.query("DELETE FROM carrito WHERE id = ?", [carritoId]);
  } catch (error) {
    console.log("Error al insertar en carrito " + error);
  }
}

async function updateCarritoModel(carritoId, carritoData) {
  try {
    let sql = 'UPDATE carrito SET ';
    const values = [];

    for (const key in carritoData) {
        sql += `${key} = ?, `;
        values.push(carritoData[key]);
    }

    sql = sql.slice(0, -2);

    sql += ' WHERE id = ?';
    values.push(carritoId);

    await conexion.execute(sql, values);
    console.log('Carrito actualizado correctamente');
  } catch(error) {
      console.log("error editando la categoria " + error)
  }
}

async function createCarritoModel(carritoData) {
  let { producto, usuario } = carritoData;
  try {
    await conexion.query("INSERT INTO carrito (producto, usuario) VALUES (?,?)", [producto, usuario])
  } catch(error) {
    console.log("Error al crear un carrito " + error)
  }
}

module.exports ={
  getCarritoByUserId,
  insertarCarritoModel,
  deleteCarritoModel,
  getAllCarritoModel,
  updateCarritoModel,
  createCarritoModel
}