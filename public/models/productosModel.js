const obtenerConexion = require("../config/db");

let conexion;

(async function miConexion() {
    conexion = await obtenerConexion();
})()

async function getAllProductos() {
  try {
    const [rows] = await conexion.query("SELECT * FROM productos");
    return rows;
  } catch(error) {
    console.log("Error al buscar todos las productos " + error);
  }
}

async function getProductById(id) {
  try {
    const [rows] = await conexion.query("SELECT * FROM productos WHERE idproducto = ?", [id])
    return rows[0];
  } catch(error) {
    console.log("Error al buscar un producto por id " + error)
  }
}

async function getProductosByCategoria(categoria) {
  try {
    const [rows] = await conexion.query("SELECT * FROM productos WHERE categoria = (SELECT idcategoria FROM categorias WHERE nombre=?);", [categoria]);
    return rows;
  } catch(error) {
    console.log("Error al buscar productos por categoria " + error);
  }
}

async function deleteProdModel(id) {
  try {
    await conexion.query("DELETE FROM productos WHERE idproducto=?", [id])
  } catch (error) {
    console.log("Error al borrar un producto " + error)
  }
}

async function createProdModel(prodData) {
  console.log(prodData)
  let { nombre, precio, img, categoria } = prodData;
  try {
    await conexion.query("INSERT INTO productos (nombre, precio, img, categoria) VALUES (?,?,?,?)", [nombre, precio, img, categoria])
  } catch(error){
    console.log("Error creando productos " + error)
  }
}

async function updateProdModel(prodId, prodData) {
  try {
    let sql = 'UPDATE productos SET ';
    const values = [];

    for (const key in prodData) {
        sql += `${key} = ?, `;
        values.push(prodData[key]);
    }

    sql = sql.slice(0, -2);

    sql += ' WHERE idproducto = ?';
    values.push(prodId);

    await conexion.execute(sql, values);
    console.log('Producto actualizado correctamente');
  } catch(error) {
      console.log("error editando el producto " + error)
  }
}

async function searchByName(name) {
  try {
    const [rows] = await conexion.query("SELECT * FROM productos WHERE nombre LIKE ?", ['%' + name + '%'])
    return rows
  } catch(error) {
    console.log("Error buscando un producto por su nombre " + error)
  }
}

module.exports ={
  getAllProductos,
  getProductosByCategoria,
  deleteProdModel,
  getProductById,
  createProdModel,
  updateProdModel,
  searchByName
}