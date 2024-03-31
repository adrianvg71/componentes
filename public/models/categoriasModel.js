const obtenerConexion = require("../config/db");

let conexion;

(async function miConexion() {
    conexion = await obtenerConexion();
})()

async function getAllCategories() {
  try {
    const [rows] = await conexion.query("SELECT * FROM categorias");
    return rows;
  } catch(error) {
    console.log("Error al buscar todas las categorias " + error);
  }
}

async function deleteCatModel(catId) {
  try {
    await conexion.query("DELETE FROM categorias WHERE idcategoria = ?", [catId])
  } catch(error) {
    console.log("Error al borrar una categoria " + error)
  }
}

async function updateCatModel(catId, catData) {
  try {
    let sql = 'UPDATE categorias SET ';
    const values = [];

    for (const key in catData) {
        sql += `${key} = ?, `;
        values.push(catData[key]);
    }

    sql = sql.slice(0, -2);

    sql += ' WHERE idcategoria = ?';
    values.push(catId);

    await conexion.execute(sql, values);
    console.log('Categoria actualizada correctamente');
  } catch(error) {
      console.log("error editando la categoria " + error)
  }
}

async function createCatModel(catData) {
  try {
    let { nombre } = catData
    await conexion.query("INSERT INTO categorias (nombre) VALUES (?)", [nombre])
  } catch(error) {
    console.log("Errro al crear una categoria " + error)
  } 
}



module.exports ={
  getAllCategories,
  deleteCatModel,
  updateCatModel,
  createCatModel
}